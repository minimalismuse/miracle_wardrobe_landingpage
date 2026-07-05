// Mini-Tracker fuer das Monitoring Cockpit.
// Cookielos, speichert keine IPs, keine User-Agents, keine Personendaten.
// Schreibt pro Ereignis eine Zeile in die Notion-DB "Tracker-Events".
// Benoetigte Vercel-Env-Vars: NOTION_TOKEN, TRACKER_DB_ID

const ALLOWED_TYPES = ['pageview', 'cta_click', 'purchase'];
const ALLOWED_SOURCES = ['instagram', 'tiktok', 'newsletter', 'dm'];

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  // Bots nicht zaehlen (User-Agent wird nur geprueft, nie gespeichert)
  const ua = req.headers['user-agent'] || '';
  if (/bot|crawl|spider|preview|facebookexternalhit/i.test(ua)) {
    res.status(204).end();
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  const type = ALLOWED_TYPES.includes(body.t) ? body.t : null;
  const source = ALLOWED_SOURCES.includes(body.s) ? body.s : 'direkt';
  const path = String(body.p || '/').slice(0, 100);

  if (!type) {
    res.status(204).end();
    return;
  }

  const now = new Date().toISOString();

  try {
    const resp = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        parent: { database_id: process.env.TRACKER_DB_ID },
        properties: {
          'Event': { title: [{ text: { content: `${type} ${source} ${now}` } }] },
          'Zeitpunkt': { date: { start: now } },
          'Typ': { select: { name: type } },
          'Quelle': { select: { name: source } },
          'Pfad': { rich_text: [{ text: { content: path } }] }
        }
      })
    });
    if (!resp.ok) {
      console.log('notion write failed:', resp.status, (await resp.text()).slice(0, 300));
    }
  } catch (e) {
    // Tracking darf nie die Seite stoeren, aber der Fehler wird geloggt.
    console.log('notion error:', e.message);
  }

  res.status(204).end();
};
