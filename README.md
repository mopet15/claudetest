# 🍳 StudentenKoch - Rezept-App für Studenten

Eine moderne, interaktive Web-App mit über 110 einfachen, günstigen und schnellen Rezepten speziell für Studenten!

## ✨ Features

- **110+ Rezepte** - Vielfältige Auswahl von Pasta über Reis bis hin zu Desserts
- **Intelligente Filterung** - Nach Zutaten, Kategorien und Kochzeit filtern
- **Echtzeit-Suche** - Schnelles Finden von Rezepten nach Name oder Zutaten
- **Responsive Design** - Funktioniert perfekt auf Desktop, Tablet und Smartphone
- **Detaillierte Rezepte** - Mit Schritt-für-Schritt Anleitungen und Nährwertangaben
- **Studentenfreundlich** - Günstige, einfache und schnelle Rezepte

## 🚀 Schnellstart

### Option 1: Direkt im Browser öffnen
1. Lade alle Dateien in einen Ordner herunter
2. Öffne `index.html` in deinem Browser
3. Fertig! Die App läuft komplett lokal ohne Server

### Option 2: Mit lokalem Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (mit http-server)
npx http-server
```

Dann öffne: `http://localhost:8000`

## 📱 Verwendung

### 🔍 Suche
- Gib in das Suchfeld ein Rezept oder eine Zutat ein
- Die Ergebnisse werden in Echtzeit gefiltert

### 🏷️ Nach Kategorien filtern
- **Vegetarisch** 🥗 - Rezepte ohne Fleisch
- **Vegan** 🌱 - Komplett pflanzlich
- **Schnell** ⚡ - Unter 20 Minuten
- **Günstig** 💰 - Unter 5€ pro Portion
- **Proteinreich** 💪 - Hoher Proteingehalt

### 🥕 Nach Zutaten filtern
- Klicke auf eine oder mehrere Zutaten
- Es werden nur Rezepte angezeigt, die ALLE ausgewählten Zutaten enthalten
- Perfekt wenn du nur bestimmte Zutaten im Kühlschrank hast!

### ⏱️ Nach Kochzeit filtern
- **0-15 Min** - Blitzschnelle Rezepte
- **15-30 Min** - Schnelle Gerichte
- **30-60 Min** - Normale Kochzeit

### 📖 Rezept-Details
- Klicke auf eine Rezept-Karte für Details
- Sieh dir Zutaten, Schritt-für-Schritt Anleitung und Nährwerte an

## 📊 Rezept-Kategorien

Die App enthält Rezepte aus folgenden Kategorien:

- 🍝 **Pasta & Nudeln** (Spaghetti Aglio e Olio, Carbonara, Mac and Cheese, etc.)
- 🍚 **Reis & Asiatisch** (Gebratener Reis, Curry, Teriyaki Bowl, Ramen, etc.)
- 🥔 **Kartoffelgerichte** (Bratkartoffeln, Ofenkartoffeln, Kartoffelpuffer, etc.)
- 🥣 **Suppen & Eintöpfe** (Tomatensuppe, Linsensuppe, Chili, etc.)
- 🥗 **Salate** (Caesar Salad, Griechischer Salat, Couscous-Salat, etc.)
- 🍳 **Pfannengerichte** (Rührei, Omelett, Shakshuka, etc.)
- 🥪 **Sandwiches & Wraps** (Club Sandwich, Veggie Wrap, Falafel, etc.)
- 🍕 **Pizza & Flammkuchen** (Margherita, Veggie Pizza, etc.)
- 🍔 **Burger & Fastfood** (Cheeseburger, Hot Dog, Chicken Nuggets, etc.)
- 🥞 **Frühstück** (Porridge, French Toast, Avocado Toast, etc.)
- 🧀 **Snacks** (Nachos, Bruschetta, Quesadilla, etc.)
- 🥘 **Aufläufe** (Lasagne, Gemüseauflauf, Nudelauflauf, etc.)
- 🌱 **Vegetarisch/Vegan** (Buddha Bowl, Linsen-Dal, Falafel, etc.)
- 🥢 **Weitere Asiatische Gerichte** (Pad Thai, Sushi Bowls, Pho, etc.)
- 🍰 **Desserts** (Pancakes, Brownies, Tiramisu, etc.)

## 💡 Tipps für Studenten

### Geld sparen
1. Nutze den **Günstig**-Filter für Rezepte unter 5€
2. Kaufe Grundzutaten in größeren Mengen
3. Nutze den Zutaten-Filter um Reste zu verwerten

### Zeit sparen
1. Nutze den **Schnell**-Filter für Rezepte unter 20 Min
2. Bereite Reis/Nudeln in größeren Mengen vor
3. Meal Prep: Koche mehrere Portionen auf einmal

### Gesund essen
1. Nutze den **Vegetarisch/Vegan**-Filter
2. Achte auf die Nährwertangaben in den Rezepten
3. Kombiniere verschiedene Rezepte für ausgewogene Ernährung

## 🛠️ Technologie

- **HTML5** - Struktur
- **CSS3** - Styling mit modernen Features (Grid, Flexbox, Animationen)
- **Vanilla JavaScript** - Keine Frameworks, pure Performance
- **Responsive Design** - Mobile First Ansatz

## 📁 Projektstruktur

```
studentenkoch/
├── index.html          # Hauptseite
├── style.css          # Styling
├── recipes.js         # Rezept-Datenbank (110+ Rezepte)
├── app.js            # App-Logik und Interaktivität
└── README.md         # Diese Datei
```

## 🎨 Features im Detail

### Intelligente Suche
Die Suchfunktion durchsucht:
- Rezept-Namen
- Beschreibungen
- Alle Zutaten

### Multi-Filter System
Kombiniere verschiedene Filter:
- Suche nach "Pasta" + Filter "vegetarisch" + Filter "schnell"
- Wähle mehrere Zutaten + Kategorie + Zeitlimit

### Responsive Design
- **Desktop**: Grid-Layout mit 3 Spalten
- **Tablet**: Grid-Layout mit 2 Spalten
- **Mobile**: Single-Column Layout

## 🔮 Mögliche Erweiterungen

- [ ] Favoriten-Funktion (LocalStorage)
- [ ] Einkaufslisten-Generator
- [ ] Portionsrechner
- [ ] Bewertungssystem
- [ ] Eigene Rezepte hinzufügen
- [ ] Dark Mode
- [ ] Offline-Modus (PWA)
- [ ] Rezepte teilen (Social Media)

## 🤝 Mitwirken

Weitere Rezepte hinzufügen:
1. Öffne `recipes.js`
2. Füge ein neues Rezept-Objekt zum Array hinzu
3. Folge dem bestehenden Format

Beispiel:
```javascript
{
    id: 111,
    name: "Dein Rezept",
    emoji: "🍽️",
    time: 30,
    difficulty: "Einfach",
    price: 4.00,
    servings: 2,
    categories: ["vegetarisch", "schnell"],
    ingredients: ["Zutat 1", "Zutat 2"],
    description: "Kurze Beschreibung",
    instructions: ["Schritt 1", "Schritt 2"],
    nutrition: { calories: 400, protein: 15, carbs: 50, fat: 12 }
}
```

## 📄 Lizenz

Dieses Projekt ist Open Source und frei verwendbar.

## 🙏 Danke

Viel Spaß beim Kochen und guten Appetit! 🍴

---

**Made with ❤️ for Students**

Bei Fragen oder Problemen, erstelle ein Issue im Repository!
