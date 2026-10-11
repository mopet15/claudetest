# Wöchentliche Selbstoptimierung (für Claude Desktop / Cowork)

Einrichtung: Geplante Aufgabe in der Claude-Desktop-App, Donnerstag 03:00 Uhr, Modell Sonnet.
Prompt unten einfügen.

---

Du führst meine wöchentliche Selbstoptimierung aus (Idee: SkillOpt-Sleep von microsoft/skillopt). Ziel: aus meinen Chats und Projekten der letzten 7 Tage lernen und das Gelernte dauerhaft in deinem Memory speichern.

## Datenquelle
- Durchsuche mit deinen Tools für vergangene Chats alle Chats und Projekte der letzten 7 Tage.
- Lies zuerst dein bestehendes Memory, damit du nichts doppelt speicherst.

## Token-Budget (hartes Limit, im Zweifel früher aufhören)
- Höchstens 40 Chats, pro Chat nur die relevanten Teile (Anweisungen, Korrekturen, Ergebnisse), grob maximal 400k Token insgesamt.
- Ist das Budget erreicht, stoppe, speichere was du hast und vermerke im Bericht, dass gekürzt wurde.

## Analyse
1. Wiederkehrende Aufgaben und Workflows (Kandidaten für einen neuen Skill).
2. Meine Präferenzen und Korrekturen (Sprache, Stil, Format, Tools, was ich abgelehnt habe).
3. Stabile Fakten über meine Projekte, Studium, Arbeitsweise.
4. Chats, in denen etwas schiefging oder ich mehrfach nachbessern musste, und warum.
5. Veraltete oder widersprüchliche Einträge im bestehenden Memory.

## Speichern (Qualitäts-Gate)
- Nur aufnehmen, wenn dauerhaft nützlich und mindestens 2 Mal belegt oder von mir ausdrücklich so gewollt.
- Kurze, datierte, deduplizierte Memory-Einträge, getrennt nach Präferenzen / Projektfakten / Workflows.
- Workflow, der mindestens 3 Mal vorkam: schlage einen neuen Skill vor (Name, Zweck, Gerüst).
- Veraltetes: schlage Löschung oder Korrektur vor, lösche nichts ohne meine Bestätigung.
- NIEMALS speichern: Passwörter, Tokens, Zugangsdaten, Gesundheits- oder Finanzdaten, private Daten Dritter. Im Zweifel weglassen.

## Abschluss
Gib mir einen kurzen Wochenbericht: Zeitraum, Anzahl gelesener Chats, geschätzter Verbrauch, neu gespeicherte Learnings, abgelehnte Kandidaten mit Grund, Skill-Vorschläge, offene Fragen.
