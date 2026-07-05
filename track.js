// Mini-Tracker Client (cookielos, kein Speichern auf dem Geraet, Multi-Site).
// Einbindbar auf jeder von Adinas Seiten:
// <script src="https://themiraclewardrobe.minimalismuse.de/track.js" defer></script>
(function () {
  var ENDPOINT = 'https://themiraclewardrobe.minimalismuse.de/api/track';
  var ALLOWED = ['instagram', 'tiktok', 'newsletter', 'youtube', 'podcast', 'google'];
  var params = new URLSearchParams(location.search);
  var raw = params.get('utm_source') || '';
  var source = ALLOWED.indexOf(raw.toLowerCase()) >= 0 ? raw.toLowerCase() : '';
  var medium = (params.get('utm_medium') || '').toLowerCase().replace(/[^a-z]/g, '').slice(0, 20);

  // Fallback: Herkunft aus dem Referrer ableiten, wenn kein UTM-Parameter da ist
  if (!source) {
    var ref = (document.referrer || '').toLowerCase();
    if (/instagram\.com/.test(ref)) source = 'instagram';
    else if (/tiktok\.com/.test(ref)) source = 'tiktok';
    else if (/facebook\.com/.test(ref)) source = 'instagram'; // Meta-Umfeld
    else if (/youtube\.com|youtu\.be/.test(ref)) source = 'youtube';
    else if (/google\./.test(ref)) source = 'google';
    else source = 'direkt';
  }

  function send(type) {
    try {
      // text/plain vermeidet CORS-Preflight; der Server parst den String selbst
      var data = JSON.stringify({ t: type, s: source, m: medium, h: location.hostname, p: location.pathname });
      if (navigator.sendBeacon) {
        navigator.sendBeacon(ENDPOINT, new Blob([data], { type: 'text/plain' }));
      } else {
        fetch(ENDPOINT, { method: 'POST', body: data, keepalive: true, headers: { 'Content-Type': 'text/plain' } });
      }
    } catch (e) { /* Tracking darf nie die Seite stoeren */ }
  }

  // Global verfuegbar, z.B. fuer die Danke-Seite: mwTrack('purchase')
  window.mwTrack = send;

  send('pageview');

  // CTA-Klicks: alle Links mit cta-Klassen, Warteliste-Bar oder data-track-Attribut
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a, button');
    if (!a) return;
    var cls = (a.className || '') + '';
    var href = a.getAttribute && (a.getAttribute('href') || '');
    if (/(^|\s|-)cta(\s|-|$)/i.test(cls) || /waitlist-bar/.test(cls) ||
        a.hasAttribute('data-track') || href.indexOf('#anmelden') === 0) {
      send('cta_click');
    }
  }, true);
})();
