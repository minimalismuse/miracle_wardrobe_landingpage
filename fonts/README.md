# Fonts (lokal hosten)

Damit die Webseite DSGVO-konform Schriften lädt (also nicht extern von Google Fonts), liegen die Schriftdateien in diesem Ordner.

## Welche Schriften brauchst du?

**Montserrat** in folgenden Schnitten:
- 300 (Light)
- 300 italic (Light italic)
- 400 (Regular)
- 500 (Medium)

**Cormorant Garamond** in folgenden Schnitten:
- 400 (Regular)
- 400 italic (Italic)
- 500 (Medium)

Jeweils inklusive `latin` und `latin-ext` (für Umlaute, Akzente etc.).

## Schritt-für-Schritt-Anleitung

1. Gehe auf [https://gwfh.mranftl.com/fonts](https://gwfh.mranftl.com/fonts) (Google Webfonts Helper).
2. Suche nach **Montserrat**.
3. Wähle bei "Charsets" `latin` und `latin-ext` aus.
4. Wähle bei "Styles" die oben genannten Schnitte aus (300, 300 italic, 400, 500).
5. Klicke auf **Download files** und entpacke das ZIP.
6. Ziehe alle `.woff2`-Dateien aus dem ZIP in diesen `fonts/`-Ordner.
7. Wiederhole das Ganze für **Cormorant Garamond** (Schnitte: 400, 400 italic, 500).

## Wichtig: Dateinamen

Die `fonts.css` in diesem Ordner erwartet folgende Dateinamen:

```
montserrat-v25-latin-300.woff2
montserrat-v25-latin-300italic.woff2
montserrat-v25-latin-regular.woff2
montserrat-v25-latin-500.woff2
cormorant-garamond-v16-latin-regular.woff2
cormorant-garamond-v16-latin-italic.woff2
cormorant-garamond-v16-latin-500.woff2
```

Falls Google Webfonts Helper andere Versionsnummern (z.&nbsp;B. `v26` statt `v25`) ausspuckt, hast du zwei Optionen:

- **Variante A:** Dateien manuell in obige Schreibweise umbenennen.
- **Variante B:** `fonts.css` an die echten Dateinamen anpassen (in jeder `src: url(...)`-Zeile den Namen ersetzen).

## Test

Sobald die `.woff2`-Dateien drin liegen, sollte die Webseite die Schriften lokal laden. In den Browser-DevTools (Tab "Netzwerk") sollten keine Anfragen mehr an `fonts.googleapis.com` oder `fonts.gstatic.com` zu sehen sein.
