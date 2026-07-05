// Mini-Tracker Client (cookielos, kein Speichern auf dem Geraet).
// Liest utm_source nur aus der aktuellen URL, merkt sich nichts.
(function () {
  var ALLOWED = ['instagram', 'tiktok', 'newsletter', 'dm'];
  var raw = new URLSearchParams(location.search).get('utm_source') || '';
  var source = ALLOWED.indexOf(raw.toLowerCase()) >= 0 ? raw.toLowerCase() : '';

  // Fallback: Herkunft aus dem Referrer ableiten, wenn kein UTM-Parameter da ist
  if (!source) {
    var ref = (document.referrer || '').toLowerCase();
    if (/instagram\.com/.test(ref)) source = 'instagram';
    else if (/tiktok\.com/.test(ref)) source = 'tiktok';
    else if (/facebook\.com/.test(ref)) source = 'instagram'; // Meta-Umfeld
    else source = 'direkt';
  }

  function send(type) {
    try {
      var data = JSON.stringify({ t: type, s: source, p: location.pathname });
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/track', new Blob([data], { type: 'application/json' }));
      } else {
        fetch('/api/track', { method: 'POST', body: data, keepalive: true });
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
