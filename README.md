# website
minimalismuse website

## Mini-Tracker (Monitoring Cockpit)

Cookielose Reichweitenmessung. Ereignisse (pageview, cta_click, purchase) landen in der Notion-DB "Tracker-Events".

**Dateien:** `api/track.js` (Serverless-Endpoint), `track.js` (Client-Snippet, eingebunden in index/nachzueglerin/v/danke), `danke.html` (Kauf-Bestätigung, trackt purchase).

**Einmaliges Setup:**
1. Vercel-Projekt → Settings → Environment Variables: `NOTION_TOKEN` (Integration-Token, gleicher wie OKR Cockpit) und `TRACKER_DB_ID` = `394290df-1f01-8167-a972-c632ef5308c1`
2. In Notion die DB "Tracker-Events" für die Integration freigeben (DB öffnen → ... → Connections)
3. Deploy: git add/commit/push (Vercel baut automatisch)
4. ThriveCart: Checkout → Success URL auf `https://themiraclewardrobe.minimalismuse.de/danke` setzen
5. Test: Seite mit `?utm_source=instagram` aufrufen → neue Zeile in Tracker-Events

**UTM-Konvention:** `utm_source=instagram | tiktok | newsletter | dm`. Alles ohne Parameter zählt als "direkt".
