// Privat-Routinen-Endpoint fuer das Monitoring Cockpit.
// Empfaengt einmal taeglich vom iPhone-Kurzbefehl: Meditationsminuten (gestern)
// und Einschlafzeit (letzte Nacht). Schreibt beides ins Notion KPI-Log.
// Env-Vars: NOTION_TOKEN, KPILOG_DB_ID, HEALTH_KEY
// Auth: Header "x-health-key" muss HEALTH_KEY entsprechen.

const NOTION = 'https://api.notion.com/v1';

function headers() {
  return {
    'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
    'Notion-Version': '2022-06-28',
    'Content-Type': 'application/json'
  };
}

// Gestern im Format YYYY-MM-DD, deutsche Zeitzone
function yesterdayBerlin() {
  const now = new Date();
  const berlin = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Berlin' }));
  berlin.setDate(berlin.getDate() - 1);
  return berlin.toISOString().slice(0, 10);
}

// "22:43" -> 22.72 · "00:30" -> 24.5 (nach Mitternacht zaehlt als >24)
function sleepDecimal(hhmm) {
  const m = /^(\d{1,2}):(\d{2})/.exec(String(hhmm || '').trim());
  if (!m) return null;
  let h = parseInt(m[1], 10) + parseInt(m[2], 10) / 60;
  if (h < 12) h += 24;
  return Math.round(h * 100) / 100;
}

// Eine Metrik fuer ein Datum upserten (existiert die Zeile, wird sie ueberschrieben)
async function upsert(metric, date, value, note) {
  const dbId = process.env.KPILOG_DB_ID;
  const q = await fetch(`${NOTION}/databases/${dbId}/query`, {
    method: 'POST', headers: headers(),
    body: JSON.stringify({
      filter: { and: [
        { property: 'Datum', date: { equals: date } },
        { property: 'Metrik', select: { equals: metric } }
      ] }, page_size: 1
    })
  }).then(r => r.json());

  const props = {
    'Titel': { title: [{ text: { content: `${metric} ${date}` } }] },
    'Datum': { date: { start: date } },
    'Metrik': { select: { name: metric } },
    'Wert': { number: value },
    'Notiz': { rich_text: note ? [{ text: { content: note } }] : [] }
  };

  if (q.results && q.results.length > 0) {
    return fetch(`${NOTION}/pages/${q.results[0].id}`, {
      method: 'PATCH', headers: headers(), body: JSON.stringify({ properties: props })
    });
  }
  return fetch(`${NOTION}/pages`, {
    method: 'POST', headers: headers(),
    body: JSON.stringify({ parent: { database_id: dbId }, properties: props })
  });
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.status(405).end(); return; }
  if ((req.headers['x-health-key'] || '') !== process.env.HEALTH_KEY) {
    res.status(401).json({ ok: false, error: 'key' });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
  body = body || {};

  const date = /^\d{4}-\d{2}-\d{2}$/.test(body.date || '') ? body.date : yesterdayBerlin();
  const results = [];

  try {
    if (body.med !== undefined && body.med !== null && body.med !== '') {
      const med = Math.max(0, Math.round(parseFloat(body.med) || 0));
      await upsert('meditation_min', date, med, 'via iPhone-Kurzbefehl');
      results.push(`meditation_min=${med}`);
    }
    if (body.sleep) {
      const dec = sleepDecimal(body.sleep);
      if (dec !== null) {
        await upsert('einschlafzeit', date, dec, `eingeschlafen ${body.sleep} Uhr, via iPhone-Kurzbefehl`);
        results.push(`einschlafzeit=${dec}`);
      }
    }
    res.status(200).json({ ok: true, date, saved: results });
  } catch (e) {
    console.log('health error:', e.message);
    res.status(500).json({ ok: false });
  }
};
