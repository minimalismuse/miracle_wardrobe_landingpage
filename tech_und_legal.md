---
name: TMW Landing Page — Tech & Legal Details
description: Vollständige Tech- und Datenschutz-Details für themiraclewardrobe.minimalismuse.de. Quelle der Wahrheit für Datenschutz, Impressum, AGB, AV-Verträge. Bei Änderungen in Absprache mit Adina aktualisieren.
type: reference
last_updated: 2026-06-12
---

## Wichtig

Vor jeder rechtlichen Entscheidung (Datenschutz, Impressum, AV-Verträge) hier reinschauen. Bei Änderungen in Absprache mit Adina aktualisieren.

---

## Domain & Hosting

### Hauptdomain: minimalismuse.de
- **Hoster:** Alfahosting
- Klassische Website-Inhalte

### Subdomain: themiraclewardrobe.minimalismuse.de
- **Hoster:** Vercel (Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA)
- **DNS-Routing:** über Alfahosting
- **DSGVO-relevant:** **NUR Vercel**. DNS-Routing zählt nicht als „Hosting" im Sinne der DSGVO, weil dort keine personenbezogenen Daten verarbeitet werden
- Deploy via GitHub-Push (Repo: github.com/minimalismuse/miracle_wardrobe_landingpage)
- Lokales Repo: `~/Websites/miracle_wardrobe_landingpage/`

→ Beim Datenschutz für TMW Landing Page: Hoster = **Vercel**, NICHT Alfahosting.

---

## Eingebundene Tools auf TMW Landing Page (Stand: Mai 2026)

### In der Landing Page direkt eingebaut

| Tool | Was | DSGVO-Status |
|---|---|---|
| **Vercel Web Analytics** | First-Party, cookielos, anonym | Niedrig. Erwähnung im Datenschutz nötig |
| **ThriveCart Cart-Embed** | `tinder.thrivecart.com` lädt Cart-Iframe | Mittel. Manueller Datenschutz-Baustein |
| Vercel Hosting | siehe oben | Standard-Baustein |
| Server-Logfiles | Standard | Standard-Baustein |
| Lokale Schriftarten | `fonts/fonts.css` mit Montserrat + Cormorant Garamond als WOFF2 | KEINE Verbindung zu Google Fonts mehr |

### Datenerhebung im ThriveCart-Checkout (Stand: Mai 2026)

Beim Bestellprozess werden folgende Daten erhoben:

- Vorname
- Nachname
- E-Mail-Adresse
- Rechnungsadresse (Straße, Stadt, PLZ, Land, Bundesland)
- Zahlungsdaten: Kreditkarte (über Stripe abgewickelt) ODER PayPal
- Optional: Gutscheincode

ThriveCart-Checkout enthält bereits:

- AGB-Checkbox mit Link
- Widerrufsregelung-Checkbox mit Aufklapp-Hinweis
- Preisanzeige inkl. ausgewiesener MwSt. (199 € brutto, 31,77 € MwSt.)

### Transitiv über ThriveCart geladen (im iframe)

| Service | Zweck |
|---|---|
| **Stripe** (`js.stripe.com`, `api.stripe.com`) | Kreditkarten-Zahlung. Sitz Irland, EU |
| **hCaptcha** | Bot-Schutz. Verarbeitet IP + Browser-Fingerprint |
| **Sentry** (`js.sentry-cdn.com`) | ThriveCarts eigenes Error-Tracking |
| Evtl. PayPal / EPS | Zahlungs-Buttons (wenn aktiviert) |

### Schema.org JSON-LD

- Inline `<script type="application/ld+json">`
- Schema-Markup für SEO
- Keine Datenübertragung

---

## Was NICHT eingebunden ist (gut zu wissen)

- Kein Google Analytics
- Kein Google Tag Manager
- Kein Meta/Facebook Pixel
- Kein Hotjar / Microsoft Clarity / Mousflow
- Keine Vimeo / YouTube Embeds
- Keine Google Maps
- Kein Cookie Banner
- Kein Newsletter-Formular (geplant, aber noch nicht aktiv)
- Keine externen Google Fonts (lokal gehostet)

---

## Newsletter & E-Mail-Marketing

- **Anbieter:** Sender.net (Sender, Limited Liability Company, Litauen. EU-Anbieter)
- **Plan:** Free Plan (Stand Mai 2026, bis 2.500 Kontakte, 15.000 Mails/Monat)
- **Status auf TMW Landing Page:** Aktuell noch keine Newsletter-Box eingebaut, geplant
- **DSGVO-Hinweis:** Sender.net hat Sitz in der EU (Vilnius, Litauen) → kein Drittlandtransfer-Problem
- **Im Datenschutz erwähnen:** Sobald die Anmeldebox live ist
- **AV-Vertrag:** Bei Sender.net im Account abschließen (Settings → DPA / Privacy)

### Tooling-Entscheidung E-Mail-Marketing (Mai 2026)

Adina hat im Mai 2026 die EU-Tools Sender, MailerLite, Active Campaign und Klick-Tipp verglichen. Use-Case: Student Support automatisieren (Onboarding nach Kauf, Modul-Reminder), Lead Nurturing, Newsletter, Tagging. Aktuelle Listengröße ~1.500, Ziel Ende 2026: 5.000 Subscriber.

**Entscheidung:** Aktuell bleibt sie bei **Sender Free** und nutzt **Zapier Free** als Brücke zu ThriveCart (kein nativer Connector bei Sender).

**Geplanter Wechsel:** Zu **MailerLite Growing Business (~32 €/Monat bei 5k Subscribern)**, sobald die nächsten Produkte gelauncht werden. Begründung: native ThriveCart-Integration, EU-Server in Litauen, unlimited Mails, schöne UX. Bei 5k Subscribern ist MailerLite preislich sogar günstiger als Sender Standard + Zapier Pro.

**Warum nicht jetzt schon wechseln:** Sender Free kostet aktuell 0 €, Zapier Free reicht für aktuelle Käufer-Frequenz (Limit 100 Tasks/Monat). Wechsel-Moment ist gekoppelt an die nächste Produktphase, weil dann eh neue Funnels gebaut werden.

**Warum nicht Active Campaign:** Starter-Plan limitiert auf 10 Actions pro Automation, Plus-Plan ist mit ~90 €/Monat bei 5k Subscribern deutlich teurer als MailerLite. Lohnt sich erst, wenn Lead Scoring und CRM-Pipelines wirklich gebraucht werden (aktuell nicht).

**Stolpersteine im Free-Setup:**

- Zapier Free hat 100 Tasks/Monat. Pro Kauf 1 Task. Bei 100+ Käufen/Monat → Zapier Pro (~23 €) oder direkt MailerLite-Wechsel
- Zapier Free pollt alle 15 Minuten, kein Echtzeit-Webhook. Welcome-Mail kann bis zu 15 Min verzögert kommen
- Wenn Zapier hängt oder Limit erreicht ist, fehlt einer Käuferin der Onboarding-Flow. **Monatlicher Check Pflicht:** "Letzte Käuferinnen-Liste in ThriveCart vs. Sender-Käuferinnen-Gruppe abgleichen"

**Why:** Migration zu MailerLite wird einmalig 1-2 Tage kosten. Es ergibt mehr Sinn, das mit einem Produkt-Launch zu koppeln, statt jetzt parallel zu laufenden Aufgaben.

**How to apply:** Bei jeder Marketing-Frage prüfen, ob die Antwort "noch Sender, später MailerLite" lautet. Wenn Adina sagt "neuer Launch steht an" oder "neues Produkt fertig" → Migration als Initiative anlegen.

---

## Geplante Erweiterungen (noch NICHT aktiv)

- **Newsletter / Warteliste-Anmeldung** über Sender.net (siehe oben), wartet auf Einbau
- **Cookie-Banner** möglicherweise nötig wegen ThriveCart/hCaptcha (zu prüfen)

---

## Affiliate-Programm

- **Existiert für den TMW-Kurs**, läuft separat über eine ThriveCart-Seite
- **NICHT auf der TMW-Landing-Page verlinkt oder eingebettet** → kein Datenschutz-Eintrag auf der Landing Page nötig
- Falls später ein Affiliate-Tracking-Link/Banner auf der Landing Page eingebaut wird: Datenschutz nachziehen

---

## Verträge zur Auftragsverarbeitung (AV-Verträge)

| Anbieter | AV-Vertrag abgeschlossen? |
|---|---|
| Vercel | (offen. Bei Vercel-Account-Bedingungen meist inkludiert; im Account unter Settings → Legal prüfen) |
| Alfahosting | (offen. Im Kunden-Account unter „Datenschutz" / „AV-Vertrag" prüfen) |
| ThriveCart | (offen. Bei US-Anbietern oft Standard Contractual Clauses statt AV) |
| Stripe | (offen. Wird über ThriveCart abgewickelt) |

→ Vor Live-Schaltung: alle AV-Verträge prüfen und im Account aktiv abschließen.

---

## Rechtliche Strukturen (Status)

### Online-Shop-Status

- TMW Landing Page = **Online-Shop im rechtlichen Sinne**
- Begründung: Kaufabschluss läuft direkt über das eingebettete ThriveCart-Widget auf der Landing Page (nicht extern weitergeleitet)
- Konsequenzen:
  - Impressum mit „Online-Shop = Ja" erstellen
  - Datenschutzerklärung mit „Online-Shop = Ja" erstellen
  - **AGB nötig** (zusätzlich zu Impressum + Datenschutz)
  - **Widerrufsbelehrung nötig** (14 Tage)
  - Preisangabe inkl. MwSt. (199 € als Brutto deklariert)
  - „Zahlungspflichtig bestellen"-Button (von ThriveCart in der Regel automatisch korrekt beschriftet)

### Aktuelle Files im Repo

- `index.html` — Landing Page mit Footer (Impressum + Datenschutz verlinkt)
- `impressum.html` — Platzhalter-Struktur, Inhalte aus eRecht24-Generator einsetzen
- `datenschutz.html` — Platzhalter-Struktur, Inhalte aus eRecht24-Generator einsetzen
- `legal.css` — gemeinsames Styling für die zwei Rechts-Seiten
- `fonts/` — lokale Schriftarten + README
- `datenschutz_manuelle_bausteine.md` — 6 Datenschutz-Bausteine, die eRecht24 Free nicht hatte (Stripe, ThriveCart, Vercel Web Analytics + 3 Premium-Lücken)
- noch fehlend: `agb.html`, `widerruf.html`

## Empfohlene Generator-Tools

- **eRecht24 (kostenlos)** für Impressum, Datenschutz, AGB, Widerrufsbelehrung
- Bei mehr Komplexität später: eRecht24 Premium oder datenschutz-generator.de
