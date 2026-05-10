---
name: TMW Datenschutz — manuelle Bausteine
description: Sechs Datenschutz-Abschnitte, die eRecht24 Free nicht abdeckt oder hinter der Premium-Paywall hatte. Diese Bausteine zusätzlich zum eRecht24-Text in datenschutz.html einsetzen — am besten thematisch passend zwischen die generierten Sektionen.
type: deliverable
last_updated: 2026-05-10
---

# Anleitung zum Einsetzen

In Claude Code (VS Code) folgenden Prompt geben:

> Bitte ergänze in datenschutz.html die folgenden 6 Bausteine. Setze sie thematisch passend zwischen die bestehenden Sektionen — die genaue Reihenfolge und Position findest du jeweils im Hinweis-Block über jedem Baustein. Nummeriere die Sektionen am Ende fortlaufend neu durch, damit die Reihenfolge stimmt.

Dann diese Datei oder die einzelnen Bausteine reinkopieren.

---

# Baustein 1 — Verschlüsselter Zahlungsverkehr

**Wo einsetzen:** Hinter dem Abschnitt zur SSL-/TLS-Verschlüsselung (passt thematisch direkt dahinter).

```html
<section>
  <h2>Verschlüsselter Zahlungsverkehr auf dieser Website</h2>
  <p>
    Sofern nach dem Abschluss eines kostenpflichtigen Vertrags eine Verpflichtung zur Übersendung
    deiner Zahlungsdaten an mich besteht, werden diese ausschließlich verschlüsselt übertragen.
    Die Zahlungsabwicklung erfolgt über SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
    erkennst du daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt
    und an dem Schloss-Symbol in deiner Browserzeile.
  </p>
  <p>
    Bei verschlüsselter Kommunikation können Zahlungsdaten, die du an mich übermittelst, nicht
    von Dritten mitgelesen werden.
  </p>
</section>
```

---

# Baustein 2 — Verarbeiten von Kunden- und Vertragsdaten

**Wo einsetzen:** Im Abschnitt „Datenerfassung auf dieser Website" oder eigener Hauptpunkt vor den Zahlungsdienstleistern.

```html
<section>
  <h2>Verarbeiten von Kunden- und Vertragsdaten</h2>
  <p>
    Ich erhebe, verarbeite und nutze personenbezogene Kunden- und Vertragsdaten zur Begründung,
    inhaltlichen Ausgestaltung und Änderung meiner Vertragsverhältnisse. Daten mit Personenbezug
    über die Inanspruchnahme dieser Website (Nutzungsdaten) erhebe, verarbeite und nutze ich nur,
    soweit dies erforderlich ist, um dir die Nutzung des Angebots zu ermöglichen oder abzurechnen.
  </p>
  <p>
    Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur
    Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet. Die erhobenen Kundendaten
    werden nach Abschluss des Auftrags oder Beendigung der Geschäftsbeziehung gelöscht. Gesetzliche
    Aufbewahrungsfristen bleiben unberührt.
  </p>
</section>
```

---

# Baustein 3 — Datenübermittlung bei Vertragsschluss für digitale Inhalte

**Wo einsetzen:** Direkt hinter Baustein 2.

```html
<section>
  <h2>Datenübermittlung bei Vertragsschluss für digitale Inhalte</h2>
  <p>
    Ich übermittle personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung
    notwendig ist, etwa an die mit der Zahlungsabwicklung beauftragten Unternehmen.
  </p>
  <p>
    Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur dann, wenn du der Übermittlung
    ausdrücklich zugestimmt hast. Eine Weitergabe deiner Daten an Dritte ohne ausdrückliche Einwilligung,
    etwa zu Zwecken der Werbung, erfolgt nicht.
  </p>
  <p>
    Grundlage der Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten
    zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet. Bei dieser Website handelt
    es sich um ein Angebot digitaler Inhalte (Online-Kurs „The Miracle Wardrobe"). Mit dem Kauf
    schließt du einen Vertrag über die Bereitstellung digitaler Inhalte ab. Zur Bereitstellung des
    Kurses werden dir Zugangsdaten per E-Mail übermittelt.
  </p>
</section>
```

---

# Baustein 4 — Vercel Web Analytics

**Wo einsetzen:** Im Bereich „Analyse-Tools" oder hinter „Server-Logfiles".

```html
<section>
  <h2>Vercel Web Analytics</h2>
  <p>
    Diese Website nutzt Vercel Web Analytics, einen Webanalysedienst der Vercel Inc.,
    440 N Barranca Ave #4133, Covina, CA 91723, USA.
  </p>
  <p>
    Vercel Web Analytics arbeitet <strong>cookielos</strong> und erhebt keine personenbezogenen
    Daten. Es werden lediglich anonymisierte Nutzungsdaten erfasst, etwa aufgerufene Seiten,
    Geräteklasse (Desktop/Mobil), grobe geografische Region (Land) und Verweisquelle. Eine
    Identifikation einzelner Besucher ist nicht möglich, es findet kein Cross-Site-Tracking statt.
  </p>
  <p>
    Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse liegt in der
    statistischen Auswertung des Nutzungsverhaltens zur Optimierung dieser Website. Da keine
    personenbezogenen Daten verarbeitet werden, ist eine Einwilligung nicht erforderlich.
  </p>
  <p>
    Die Datenverarbeitung kann auch in den USA stattfinden. Mit Vercel besteht ein Vertrag zur
    Auftragsverarbeitung; der Datentransfer in die USA ist über die Standardvertragsklauseln der
    EU-Kommission und das EU-US Data Privacy Framework abgesichert.
  </p>
  <p>
    Weitere Informationen zum Datenschutz bei Vercel:
    <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener">https://vercel.com/legal/privacy-policy</a>
  </p>
</section>
```

---

# Baustein 5 — ThriveCart (mit hCaptcha & Sentry transitiv)

**Wo einsetzen:** Im Bereich „eCommerce & Zahlungsanbieter" — direkt vor Stripe.

```html
<section>
  <h2>ThriveCart</h2>
  <p>
    Für die Abwicklung von Bestellungen und Zahlungen nutze ich auf dieser Website das Checkout-System
    ThriveCart der ThriveCart, LLC, 1330 N Hampton Rd, Ste 102, DeSoto, TX 75115, USA.
  </p>
  <p>
    Wenn du den Kaufprozess startest, wird das ThriveCart-Checkout-Widget direkt auf dieser Seite
    geladen. Dabei werden personenbezogene Daten (Vorname, Nachname, E-Mail-Adresse, Rechnungsadresse,
    Zahlungsdaten) erhoben und an ThriveCart übermittelt. ThriveCart verarbeitet diese Daten zur
    Abwicklung der Bestellung und übermittelt die Zahlungsdaten zur Zahlungsabwicklung an Stripe
    bzw. PayPal.
  </p>
  <p>
    Über das ThriveCart-Widget werden zusätzlich folgende Drittdienste geladen:
  </p>
  <ul>
    <li><strong>hCaptcha</strong> (Intuition Machines, Inc., 350 Alabama Street, San Francisco,
      CA 94110, USA) als Bot-Schutz. hCaptcha verarbeitet hierbei IP-Adresse und
      Browser-Eigenschaften der Besucher.</li>
    <li><strong>Sentry</strong> (Functional Software, Inc., 132 Hawthorne Street, San Francisco,
      CA 94107, USA) zur technischen Fehlerprotokollierung im Checkout-Prozess.</li>
  </ul>
  <p>
    Rechtsgrundlage für die Verarbeitung im Rahmen der Bestellung ist Art. 6 Abs. 1 lit. b DSGVO
    (Vertragserfüllung). Für den Bot-Schutz und die Fehlerprotokollierung ist die Rechtsgrundlage
    Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Sicherheit und Funktionsfähigkeit des
    Checkout-Prozesses).
  </p>
  <p>
    ThriveCart und die genannten Drittdienste haben ihren Sitz in den USA. Die Datenübermittlung in
    die USA ist über die Standardvertragsklauseln der EU-Kommission abgesichert.
  </p>
  <p>
    Weitere Informationen zum Datenschutz findest du in den Datenschutzerklärungen der jeweiligen
    Anbieter:
  </p>
  <ul>
    <li>ThriveCart: <a href="https://thrivecart.com/privacy-policy/" target="_blank" rel="noopener">https://thrivecart.com/privacy-policy/</a></li>
    <li>hCaptcha: <a href="https://www.hcaptcha.com/privacy" target="_blank" rel="noopener">https://www.hcaptcha.com/privacy</a></li>
    <li>Sentry: <a href="https://sentry.io/privacy/" target="_blank" rel="noopener">https://sentry.io/privacy/</a></li>
  </ul>
</section>
```

---

# Baustein 6 — Stripe

**Wo einsetzen:** Direkt hinter dem ThriveCart-Baustein (Baustein 5).

```html
<section>
  <h2>Zahlungsabwicklung via Stripe</h2>
  <p>
    Für die Zahlungsabwicklung per Kreditkarte nutze ich den Zahlungsdienstleister Stripe Payments
    Europe, Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland („Stripe").
  </p>
  <p>
    Wenn du dich für eine Zahlung per Kreditkarte entscheidest, werden deine Zahlungsdaten direkt
    an Stripe übermittelt und dort verarbeitet. Es gelten ergänzend die Datenschutzbestimmungen
    von Stripe.
  </p>
  <p>
    Stripe ist ein Zahlungsdienstleister mit Sitz in der Europäischen Union (Irland). Eine
    Übermittlung deiner Daten in Drittländer kann jedoch erfolgen, wenn dies für die Abwicklung der
    Zahlung erforderlich ist. In diesem Fall sind angemessene Garantien (Standardvertragsklauseln,
    EU-US Data Privacy Framework) vorhanden.
  </p>
  <p>
    Rechtsgrundlage für die Verarbeitung deiner Daten ist Art. 6 Abs. 1 lit. b DSGVO
    (Vertragserfüllung).
  </p>
  <p>
    Weitere Informationen zum Datenschutz bei Stripe:
    <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener">https://stripe.com/de/privacy</a>
  </p>
</section>
```

---

# Hinweis zur empfohlenen Reihenfolge in der finalen datenschutz.html

So sollten die Sektionen am Ende geordnet sein:

1. Verantwortlicher (aus eRecht24)
2. Hosting bei Vercel (aus eRecht24)
3. Server-Logfiles (aus eRecht24)
4. **Vercel Web Analytics** ← Baustein 4
5. SSL-/TLS-Verschlüsselung (aus eRecht24)
6. **Verschlüsselter Zahlungsverkehr** ← Baustein 1
7. Cookies (aus eRecht24)
8. hCaptcha (aus eRecht24)
9. Lokale Schriftarten (aus dem ursprünglichen Platzhalter)
10. Kontaktaufnahme per E-Mail (aus eRecht24)
11. Widerspruch Werbe-E-Mails (aus eRecht24)
12. **Verarbeiten von Kunden- und Vertragsdaten** ← Baustein 2
13. **Datenübermittlung bei Vertragsschluss für digitale Inhalte** ← Baustein 3
14. **ThriveCart** ← Baustein 5
15. **Stripe** ← Baustein 6
16. Deine Rechte (aus eRecht24)
17. Stand-Datum

---

# Disclaimer

Diese Bausteine wurden mit Sorgfalt erstellt, aber sie ersetzen keine anwaltliche Prüfung. Vor dem
Live-Gang empfehle ich eine kurze Sichtprüfung durch eine Datenschutzanwältin — gerade weil ThriveCart
und Stripe in der kostenlosen eRecht24-Vorlage nicht enthalten sind und manuell ergänzt werden mussten.
