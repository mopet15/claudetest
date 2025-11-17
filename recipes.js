// Umfangreiche Rezept-Datenbank für Studenten
const recipes = [
    // PASTA & NUDELN
    {
        id: 1,
        name: "Spaghetti Aglio e Olio",
        emoji: "🍝",
        time: 15,
        difficulty: "Einfach",
        price: 2.50,
        servings: 2,
        categories: ["vegetarisch", "schnell", "günstig"],
        ingredients: ["Spaghetti", "Knoblauch", "Olivenöl", "Chili", "Petersilie", "Parmesan", "Salz"],
        description: "Klassisches italienisches Pasta-Gericht mit Knoblauch und Öl",
        instructions: [
            "Spaghetti in Salzwasser kochen",
            "Knoblauch in dünne Scheiben schneiden",
            "Olivenöl in Pfanne erhitzen, Knoblauch und Chili anbraten",
            "Gekochte Pasta hinzufügen und gut vermischen",
            "Mit Petersilie und Parmesan servieren"
        ],
        nutrition: { calories: 520, protein: 15, carbs: 75, fat: 18 }
    },
    {
        id: 2,
        name: "One-Pot Pasta",
        emoji: "🍲",
        time: 20,
        difficulty: "Einfach",
        price: 3.50,
        servings: 2,
        categories: ["vegetarisch", "schnell"],
        ingredients: ["Nudeln", "Tomaten", "Zwiebel", "Knoblauch", "Basilikum", "Gemüsebrühe", "Olivenöl"],
        description: "Alles in einem Topf - wenig Abwasch, viel Geschmack",
        instructions: [
            "Zwiebel und Knoblauch klein schneiden",
            "Alle Zutaten in einen Topf geben",
            "Mit Brühe auffüllen und 12-15 Minuten köcheln",
            "Gelegentlich umrühren",
            "Mit Basilikum garnieren"
        ],
        nutrition: { calories: 450, protein: 12, carbs: 68, fat: 14 }
    },
    {
        id: 3,
        name: "Carbonara",
        emoji: "🥓",
        time: 20,
        difficulty: "Mittel",
        price: 4.00,
        servings: 2,
        categories: ["schnell"],
        ingredients: ["Spaghetti", "Eier", "Speck", "Parmesan", "Pfeffer", "Salz"],
        description: "Cremige Pasta mit Ei und Speck",
        instructions: [
            "Spaghetti kochen",
            "Speck in Würfel schneiden und knusprig braten",
            "Eier mit Parmesan verquirlen",
            "Heiße Pasta mit Speck mischen",
            "Ei-Mischung unterrühren (nicht kochen lassen!)",
            "Mit viel schwarzem Pfeffer servieren"
        ],
        nutrition: { calories: 680, protein: 28, carbs: 70, fat: 32 }
    },
    {
        id: 4,
        name: "Pesto Pasta",
        emoji: "🌿",
        time: 12,
        difficulty: "Einfach",
        price: 3.00,
        servings: 2,
        categories: ["vegetarisch", "schnell"],
        ingredients: ["Pasta", "Pesto", "Parmesan", "Pinienkerne", "Kirschtomaten"],
        description: "Schnelle Pasta mit frischem Pesto",
        instructions: [
            "Pasta nach Packungsanweisung kochen",
            "Kirschtomaten halbieren",
            "Pinienkerne in Pfanne rösten",
            "Pasta mit Pesto vermischen",
            "Mit Tomaten, Pinienkernen und Parmesan toppen"
        ],
        nutrition: { calories: 580, protein: 18, carbs: 65, fat: 28 }
    },
    {
        id: 5,
        name: "Mac and Cheese",
        emoji: "🧀",
        time: 25,
        difficulty: "Einfach",
        price: 3.50,
        servings: 4,
        categories: ["vegetarisch"],
        ingredients: ["Makkaroni", "Cheddar", "Milch", "Butter", "Mehl", "Salz", "Pfeffer", "Muskatnuss"],
        description: "Cremige Käsenudeln aus dem Ofen",
        instructions: [
            "Makkaroni kochen",
            "Butter schmelzen, Mehl einrühren",
            "Milch hinzufügen und Soße andicken",
            "Geriebenen Käse einrühren",
            "Mit Nudeln vermischen und optional im Ofen überbacken"
        ],
        nutrition: { calories: 520, protein: 22, carbs: 58, fat: 24 }
    },
    {
        id: 6,
        name: "Arrabiata",
        emoji: "🌶️",
        time: 20,
        difficulty: "Einfach",
        price: 2.80,
        servings: 2,
        categories: ["vegetarisch", "vegan", "schnell", "günstig"],
        ingredients: ["Penne", "Tomaten", "Knoblauch", "Chili", "Olivenöl", "Basilikum"],
        description: "Scharfe Tomatensoße mit Pasta",
        instructions: [
            "Penne kochen",
            "Knoblauch und Chili anbraten",
            "Tomaten hinzufügen und 10 Min köcheln",
            "Mit Salz abschmecken",
            "Über die Pasta geben und mit Basilikum garnieren"
        ],
        nutrition: { calories: 420, protein: 12, carbs: 72, fat: 10 }
    },

    // REIS & ASIATISCH
    {
        id: 7,
        name: "Gebratener Reis",
        emoji: "🍚",
        time: 20,
        difficulty: "Einfach",
        price: 3.50,
        servings: 2,
        categories: ["schnell"],
        ingredients: ["Reis", "Eier", "Erbsen", "Karotten", "Sojasauce", "Frühlingszwiebeln", "Sesamöl"],
        description: "Klassischer asiatischer gebratener Reis",
        instructions: [
            "Reis kochen und abkühlen lassen",
            "Gemüse klein schneiden",
            "Eier in Pfanne verquirlen und beiseite stellen",
            "Gemüse anbraten, Reis hinzufügen",
            "Mit Sojasauce würzen, Ei unterheben"
        ],
        nutrition: { calories: 480, protein: 14, carbs: 68, fat: 16 }
    },
    {
        id: 8,
        name: "Curry mit Reis",
        emoji: "🍛",
        time: 30,
        difficulty: "Einfach",
        price: 4.00,
        servings: 4,
        categories: ["vegetarisch"],
        ingredients: ["Reis", "Kokosmilch", "Currypaste", "Kartoffeln", "Kichererbsen", "Zwiebel", "Knoblauch"],
        description: "Cremiges Gemüsecurry",
        instructions: [
            "Reis kochen",
            "Zwiebel und Knoblauch anbraten",
            "Currypaste hinzufügen",
            "Kartoffeln und Kokosmilch dazugeben",
            "20 Min köcheln, Kichererbsen hinzufügen",
            "Mit Reis servieren"
        ],
        nutrition: { calories: 520, protein: 12, carbs: 78, fat: 18 }
    },
    {
        id: 9,
        name: "Teriyaki Bowl",
        emoji: "🥢",
        time: 25,
        difficulty: "Einfach",
        price: 5.00,
        servings: 2,
        categories: ["protein", "schnell"],
        ingredients: ["Reis", "Hähnchen", "Teriyaki-Sauce", "Brokkoli", "Sesam", "Frühlingszwiebeln"],
        description: "Japanische Bowl mit Teriyaki-Hähnchen",
        instructions: [
            "Reis kochen",
            "Hähnchen in Würfel schneiden und anbraten",
            "Teriyaki-Sauce hinzufügen",
            "Brokkoli dämpfen",
            "Alles in Bowl anrichten und mit Sesam bestreuen"
        ],
        nutrition: { calories: 580, protein: 35, carbs: 68, fat: 14 }
    },
    {
        id: 10,
        name: "Gemüse-Wok",
        emoji: "🥗",
        time: 15,
        difficulty: "Einfach",
        price: 4.00,
        servings: 2,
        categories: ["vegetarisch", "vegan", "schnell"],
        ingredients: ["Paprika", "Brokkoli", "Karotten", "Sojasauce", "Ingwer", "Knoblauch", "Sesamöl", "Nudeln"],
        description: "Schnelles Wok-Gemüse",
        instructions: [
            "Gemüse in mundgerechte Stücke schneiden",
            "Öl im Wok erhitzen",
            "Gemüse bei hoher Hitze anbraten",
            "Sojasauce und Gewürze hinzufügen",
            "Mit Nudeln oder Reis servieren"
        ],
        nutrition: { calories: 320, protein: 10, carbs: 52, fat: 8 }
    },
    {
        id: 11,
        name: "Ramen Suppe",
        emoji: "🍜",
        time: 25,
        difficulty: "Mittel",
        price: 4.50,
        servings: 2,
        categories: ["schnell"],
        ingredients: ["Ramen-Nudeln", "Brühe", "Ei", "Frühlingszwiebeln", "Mais", "Pilze", "Sojasauce"],
        description: "Hausgemachte Ramen-Suppe",
        instructions: [
            "Brühe erhitzen",
            "Pilze und Gemüse hinzufügen",
            "Nudeln separat kochen",
            "Eier weich kochen und halbieren",
            "Alles in Schüssel anrichten"
        ],
        nutrition: { calories: 450, protein: 18, carbs: 62, fat: 14 }
    },
    {
        id: 12,
        name: "Süß-Saures Gemüse",
        emoji: "🍍",
        time: 20,
        difficulty: "Einfach",
        price: 4.00,
        servings: 2,
        categories: ["vegetarisch", "schnell"],
        ingredients: ["Paprika", "Ananas", "Zwiebel", "Essig", "Zucker", "Sojasauce", "Maisstärke", "Reis"],
        description: "Asiatisches süß-saures Gericht",
        instructions: [
            "Gemüse und Ananas würfeln",
            "Sauce aus Essig, Zucker und Sojasauce machen",
            "Gemüse anbraten",
            "Sauce hinzufügen und mit Stärke binden",
            "Mit Reis servieren"
        ],
        nutrition: { calories: 380, protein: 8, carbs: 72, fat: 6 }
    },

    // KARTOFFELN
    {
        id: 13,
        name: "Bratkartoffeln",
        emoji: "🥔",
        time: 30,
        difficulty: "Einfach",
        price: 2.50,
        servings: 2,
        categories: ["vegetarisch", "vegan", "günstig"],
        ingredients: ["Kartoffeln", "Zwiebel", "Öl", "Salz", "Pfeffer", "Paprika"],
        description: "Knusprige Bratkartoffeln",
        instructions: [
            "Kartoffeln kochen und abkühlen lassen",
            "In Scheiben schneiden",
            "Zwiebeln würfeln",
            "Alles in Pfanne mit Öl knusprig braten",
            "Mit Gewürzen abschmecken"
        ],
        nutrition: { calories: 320, protein: 6, carbs: 52, fat: 10 }
    },
    {
        id: 14,
        name: "Kartoffel-Gratin",
        emoji: "🧀",
        time: 60,
        difficulty: "Mittel",
        price: 4.00,
        servings: 4,
        categories: ["vegetarisch"],
        ingredients: ["Kartoffeln", "Sahne", "Käse", "Knoblauch", "Muskatnuss", "Salz", "Pfeffer"],
        description: "Cremiges Kartoffel-Gratin",
        instructions: [
            "Kartoffeln in dünne Scheiben schneiden",
            "Auflaufform mit Knoblauch ausreiben",
            "Kartoffeln schichten",
            "Sahne mit Gewürzen vermischen und darüber gießen",
            "Mit Käse bestreuen und 45 Min backen"
        ],
        nutrition: { calories: 420, protein: 12, carbs: 48, fat: 22 }
    },
    {
        id: 15,
        name: "Kartoffelpuffer",
        emoji: "🥞",
        time: 25,
        difficulty: "Mittel",
        price: 3.00,
        servings: 2,
        categories: ["vegetarisch", "günstig"],
        ingredients: ["Kartoffeln", "Eier", "Mehl", "Zwiebel", "Salz", "Öl"],
        description: "Knusprige Kartoffelpuffer",
        instructions: [
            "Kartoffeln und Zwiebeln reiben",
            "Mit Ei und Mehl vermischen",
            "Mit Salz würzen",
            "Kleine Puffer formen",
            "In Öl goldbraun braten"
        ],
        nutrition: { calories: 380, protein: 10, carbs: 54, fat: 14 }
    },
    {
        id: 16,
        name: "Ofenkartoffeln",
        emoji: "🔥",
        time: 45,
        difficulty: "Einfach",
        price: 2.00,
        servings: 2,
        categories: ["vegetarisch", "vegan", "günstig"],
        ingredients: ["Kartoffeln", "Olivenöl", "Rosmarin", "Knoblauch", "Salz", "Pfeffer"],
        description: "Knusprige Kartoffeln aus dem Ofen",
        instructions: [
            "Kartoffeln in Spalten schneiden",
            "Mit Öl und Gewürzen vermischen",
            "Auf Backblech verteilen",
            "Bei 200°C 40 Min backen",
            "Zwischendurch wenden"
        ],
        nutrition: { calories: 280, protein: 5, carbs: 48, fat: 8 }
    },
    {
        id: 17,
        name: "Kartoffel-Wedges",
        emoji: "🍟",
        time: 35,
        difficulty: "Einfach",
        price: 2.50,
        servings: 2,
        categories: ["vegetarisch", "vegan", "günstig"],
        ingredients: ["Kartoffeln", "Paprikapulver", "Knoblauchpulver", "Öl", "Salz"],
        description: "Würzige Kartoffel-Wedges",
        instructions: [
            "Kartoffeln in Wedges schneiden",
            "Mit Gewürzen und Öl marinieren",
            "Auf Backblech legen",
            "Bei 220°C 30-35 Min backen",
            "Mit Dip servieren"
        ],
        nutrition: { calories: 290, protein: 5, carbs: 50, fat: 8 }
    },
    {
        id: 18,
        name: "Kartoffelsalat",
        emoji: "🥗",
        time: 40,
        difficulty: "Einfach",
        price: 3.50,
        servings: 4,
        categories: ["vegetarisch"],
        ingredients: ["Kartoffeln", "Zwiebel", "Gurke", "Mayonnaise", "Senf", "Essig", "Salz", "Pfeffer"],
        description: "Klassischer deutscher Kartoffelsalat",
        instructions: [
            "Kartoffeln kochen und abkühlen",
            "In Würfel schneiden",
            "Zwiebeln und Gurken klein schneiden",
            "Dressing aus Mayo, Senf und Essig machen",
            "Alles vermischen und ziehen lassen"
        ],
        nutrition: { calories: 280, protein: 4, carbs: 38, fat: 12 }
    },

    // SUPPEN & EINTÖPFE
    {
        id: 19,
        name: "Tomatensuppe",
        emoji: "🍅",
        time: 25,
        difficulty: "Einfach",
        price: 3.00,
        servings: 4,
        categories: ["vegetarisch", "vegan", "günstig"],
        ingredients: ["Tomaten", "Zwiebel", "Knoblauch", "Gemüsebrühe", "Basilikum", "Sahne", "Olivenöl"],
        description: "Cremige Tomatensuppe",
        instructions: [
            "Zwiebel und Knoblauch anbraten",
            "Tomaten hinzufügen und andünsten",
            "Mit Brühe ablöschen",
            "20 Min köcheln lassen",
            "Pürieren und mit Sahne verfeinern"
        ],
        nutrition: { calories: 180, protein: 4, carbs: 22, fat: 8 }
    },
    {
        id: 20,
        name: "Linsensuppe",
        emoji: "🥘",
        time: 40,
        difficulty: "Einfach",
        price: 2.50,
        servings: 4,
        categories: ["vegetarisch", "vegan", "protein", "günstig"],
        ingredients: ["Linsen", "Karotten", "Kartoffeln", "Zwiebel", "Gemüsebrühe", "Lorbeer", "Essig"],
        description: "Herzhafte Linsensuppe",
        instructions: [
            "Zwiebel würfeln und anbraten",
            "Karotten und Kartoffeln würfeln",
            "Linsen und Gemüse mit Brühe aufkochen",
            "30 Min köcheln lassen",
            "Mit Essig abschmecken"
        ],
        nutrition: { calories: 240, protein: 14, carbs: 42, fat: 2 }
    },
    {
        id: 21,
        name: "Kürbissuppe",
        emoji: "🎃",
        time: 35,
        difficulty: "Einfach",
        price: 3.50,
        servings: 4,
        categories: ["vegetarisch", "vegan"],
        ingredients: ["Kürbis", "Zwiebel", "Ingwer", "Kokosmilch", "Gemüsebrühe", "Curry"],
        description: "Cremige Kürbissuppe mit Ingwer",
        instructions: [
            "Kürbis würfeln",
            "Zwiebel und Ingwer anbraten",
            "Kürbis hinzufügen",
            "Mit Brühe ablöschen und 25 Min kochen",
            "Pürieren und Kokosmilch einrühren"
        ],
        nutrition: { calories: 220, protein: 4, carbs: 28, fat: 10 }
    },
    {
        id: 22,
        name: "Chili con Carne",
        emoji: "🌶️",
        time: 45,
        difficulty: "Einfach",
        price: 5.00,
        servings: 4,
        categories: ["protein"],
        ingredients: ["Hackfleisch", "Kidneybohnen", "Tomaten", "Zwiebel", "Paprika", "Chili", "Kreuzkümmel"],
        description: "Scharfer mexikanischer Eintopf",
        instructions: [
            "Zwiebel und Paprika würfeln",
            "Hackfleisch anbraten",
            "Gemüse hinzufügen",
            "Tomaten und Bohnen dazugeben",
            "30 Min köcheln lassen"
        ],
        nutrition: { calories: 420, protein: 32, carbs: 38, fat: 16 }
    },
    {
        id: 23,
        name: "Minestrone",
        emoji: "🥣",
        time: 40,
        difficulty: "Einfach",
        price: 4.00,
        servings: 4,
        categories: ["vegetarisch", "vegan"],
        ingredients: ["Pasta", "Tomaten", "Bohnen", "Karotten", "Sellerie", "Zwiebel", "Gemüsebrühe", "Basilikum"],
        description: "Italienische Gemüsesuppe",
        instructions: [
            "Gemüse klein schneiden",
            "Zwiebel anbraten",
            "Gemüse und Brühe hinzufügen",
            "25 Min köcheln",
            "Pasta hinzufügen und weich kochen"
        ],
        nutrition: { calories: 280, protein: 10, carbs: 48, fat: 4 }
    },
    {
        id: 24,
        name: "Gulaschsuppe",
        emoji: "🍲",
        time: 60,
        difficulty: "Mittel",
        price: 6.00,
        servings: 4,
        categories: ["protein"],
        ingredients: ["Rindfleisch", "Paprika", "Tomaten", "Zwiebel", "Kartoffeln", "Paprikapulver", "Brühe"],
        description: "Ungarische Gulaschsuppe",
        instructions: [
            "Fleisch in Würfel schneiden",
            "Zwiebeln anbraten, Fleisch hinzufügen",
            "Mit Paprika würzen",
            "Gemüse und Brühe hinzufügen",
            "50 Min köcheln lassen"
        ],
        nutrition: { calories: 380, protein: 28, carbs: 32, fat: 14 }
    },

    // SALATE
    {
        id: 25,
        name: "Caesar Salad",
        emoji: "🥬",
        time: 15,
        difficulty: "Einfach",
        price: 4.50,
        servings: 2,
        categories: ["schnell", "protein"],
        ingredients: ["Römersalat", "Hähnchen", "Parmesan", "Croutons", "Caesar-Dressing"],
        description: "Klassischer Caesar Salad",
        instructions: [
            "Salat waschen und zerkleinern",
            "Hähnchen braten und in Streifen schneiden",
            "Croutons in Pfanne rösten",
            "Alles mit Dressing vermischen",
            "Mit Parmesan bestreuen"
        ],
        nutrition: { calories: 420, protein: 32, carbs: 24, fat: 22 }
    },
    {
        id: 26,
        name: "Griechischer Salat",
        emoji: "🇬🇷",
        time: 10,
        difficulty: "Einfach",
        price: 4.00,
        servings: 2,
        categories: ["vegetarisch", "schnell"],
        ingredients: ["Tomaten", "Gurke", "Feta", "Oliven", "Zwiebel", "Olivenöl", "Oregano"],
        description: "Frischer griechischer Salat",
        instructions: [
            "Tomaten und Gurken würfeln",
            "Zwiebel in Ringe schneiden",
            "Feta in Würfel schneiden",
            "Alles vermischen",
            "Mit Olivenöl und Oregano würzen"
        ],
        nutrition: { calories: 280, protein: 12, carbs: 16, fat: 20 }
    },
    {
        id: 27,
        name: "Couscous-Salat",
        emoji: "🥗",
        time: 20,
        difficulty: "Einfach",
        price: 3.50,
        servings: 2,
        categories: ["vegetarisch", "vegan", "schnell"],
        ingredients: ["Couscous", "Tomaten", "Gurke", "Paprika", "Minze", "Zitrone", "Olivenöl"],
        description: "Orientalischer Couscous-Salat",
        instructions: [
            "Couscous mit heißem Wasser übergießen",
            "10 Min ziehen lassen",
            "Gemüse klein würfeln",
            "Alles vermischen",
            "Mit Zitrone und Öl abschmecken"
        ],
        nutrition: { calories: 320, protein: 8, carbs: 52, fat: 8 }
    },
    {
        id: 28,
        name: "Thunfisch-Salat",
        emoji: "🐟",
        time: 10,
        difficulty: "Einfach",
        price: 4.00,
        servings: 2,
        categories: ["protein", "schnell"],
        ingredients: ["Thunfisch", "Eisbergsalat", "Mais", "Tomaten", "Zwiebel", "Essig", "Öl"],
        description: "Proteinreicher Thunfisch-Salat",
        instructions: [
            "Salat zerkleinern",
            "Tomaten würfeln",
            "Zwiebel in Ringe schneiden",
            "Thunfisch und Mais hinzufügen",
            "Mit Dressing vermischen"
        ],
        nutrition: { calories: 280, protein: 26, carbs: 18, fat: 12 }
    },
    {
        id: 29,
        name: "Nudelsalat",
        emoji: "🥗",
        time: 25,
        difficulty: "Einfach",
        price: 3.50,
        servings: 4,
        categories: ["vegetarisch"],
        ingredients: ["Nudeln", "Paprika", "Gurke", "Tomaten", "Mais", "Mayonnaise", "Joghurt"],
        description: "Klassischer Nudelsalat",
        instructions: [
            "Nudeln kochen und abkühlen",
            "Gemüse klein schneiden",
            "Dressing aus Mayo und Joghurt machen",
            "Alles vermischen",
            "Mindestens 1 Std ziehen lassen"
        ],
        nutrition: { calories: 340, protein: 8, carbs: 48, fat: 14 }
    },
    {
        id: 30,
        name: "Caprese Salat",
        emoji: "🍅",
        time: 10,
        difficulty: "Einfach",
        price: 4.50,
        servings: 2,
        categories: ["vegetarisch", "schnell"],
        ingredients: ["Tomaten", "Mozzarella", "Basilikum", "Olivenöl", "Balsamico", "Salz"],
        description: "Italienischer Tomate-Mozzarella-Salat",
        instructions: [
            "Tomaten und Mozzarella in Scheiben schneiden",
            "Abwechselnd anrichten",
            "Basilikum darüber verteilen",
            "Mit Olivenöl beträufeln",
            "Mit Balsamico und Salz würzen"
        ],
        nutrition: { calories: 320, protein: 16, carbs: 8, fat: 26 }
    },

    // PFANNENGERICHTE
    {
        id: 31,
        name: "Rührei",
        emoji: "🍳",
        time: 10,
        difficulty: "Einfach",
        price: 2.00,
        servings: 1,
        categories: ["vegetarisch", "schnell", "günstig", "protein"],
        ingredients: ["Eier", "Milch", "Butter", "Salz", "Pfeffer", "Schnittlauch"],
        description: "Cremiges Rührei",
        instructions: [
            "Eier mit Milch verquirlen",
            "Butter in Pfanne schmelzen",
            "Ei-Masse hinzugeben",
            "Bei mittlerer Hitze ständig rühren",
            "Mit Schnittlauch garnieren"
        ],
        nutrition: { calories: 320, protein: 18, carbs: 2, fat: 26 }
    },
    {
        id: 32,
        name: "Omelett",
        emoji: "🥚",
        time: 12,
        difficulty: "Mittel",
        price: 3.00,
        servings: 1,
        categories: ["vegetarisch", "schnell", "protein"],
        ingredients: ["Eier", "Käse", "Schinken", "Paprika", "Butter", "Salz", "Pfeffer"],
        description: "Gefülltes Omelett",
        instructions: [
            "Eier verquirlen und würzen",
            "Füllung klein schneiden",
            "Butter in Pfanne erhitzen",
            "Ei-Masse einfüllen",
            "Füllung auf eine Hälfte geben und zusammenklappen"
        ],
        nutrition: { calories: 380, protein: 24, carbs: 4, fat: 30 }
    },
    {
        id: 33,
        name: "Shakshuka",
        emoji: "🍳",
        time: 25,
        difficulty: "Mittel",
        price: 3.50,
        servings: 2,
        categories: ["vegetarisch"],
        ingredients: ["Eier", "Tomaten", "Paprika", "Zwiebel", "Knoblauch", "Kreuzkümmel", "Chili"],
        description: "Israelisches Pfannengericht mit pochierten Eiern",
        instructions: [
            "Zwiebel, Knoblauch und Paprika anbraten",
            "Tomaten hinzufügen und würzen",
            "15 Min köcheln lassen",
            "Mulden formen und Eier hineinschlagen",
            "Abdecken bis Eier stocken"
        ],
        nutrition: { calories: 280, protein: 16, carbs: 22, fat: 14 }
    },
    {
        id: 34,
        name: "Pfannkuchen",
        emoji: "🥞",
        time: 20,
        difficulty: "Einfach",
        price: 2.50,
        servings: 2,
        categories: ["vegetarisch", "günstig"],
        ingredients: ["Mehl", "Eier", "Milch", "Zucker", "Salz", "Butter"],
        description: "Klassische Pfannkuchen",
        instructions: [
            "Alle Zutaten zu Teig verquirlen",
            "15 Min ruhen lassen",
            "Butter in Pfanne erhitzen",
            "Teig portionsweise einbacken",
            "Wenden wenn Oberseite stockt"
        ],
        nutrition: { calories: 420, protein: 12, carbs: 58, fat: 16 }
    },
    {
        id: 35,
        name: "Französische Crêpes",
        emoji: "🥞",
        time: 25,
        difficulty: "Mittel",
        price: 3.00,
        servings: 2,
        categories: ["vegetarisch"],
        ingredients: ["Mehl", "Eier", "Milch", "Butter", "Zucker", "Vanille"],
        description: "Dünne französische Crêpes",
        instructions: [
            "Teig dünn anrühren",
            "30 Min ruhen lassen",
            "Hauchdünn in Pfanne backen",
            "Mit süßer oder herzhafter Füllung servieren"
        ],
        nutrition: { calories: 380, protein: 10, carbs: 52, fat: 14 }
    },
    {
        id: 36,
        name: "Gemüsepfanne",
        emoji: "🥘",
        time: 20,
        difficulty: "Einfach",
        price: 3.50,
        servings: 2,
        categories: ["vegetarisch", "vegan", "schnell"],
        ingredients: ["Zucchini", "Paprika", "Aubergine", "Tomaten", "Knoblauch", "Olivenöl", "Kräuter"],
        description: "Mediterrane Gemüsepfanne",
        instructions: [
            "Gemüse in Würfel schneiden",
            "Knoblauch in Öl anbraten",
            "Gemüse nacheinander hinzufügen",
            "Bei hoher Hitze anbraten",
            "Mit Kräutern würzen"
        ],
        nutrition: { calories: 220, protein: 6, carbs: 28, fat: 10 }
    },

    // SANDWICHES & WRAPS
    {
        id: 37,
        name: "Club Sandwich",
        emoji: "🥪",
        time: 15,
        difficulty: "Einfach",
        price: 4.00,
        servings: 1,
        categories: ["schnell"],
        ingredients: ["Toast", "Hähnchen", "Speck", "Tomate", "Salat", "Mayonnaise", "Käse"],
        description: "Dreistöckiges Club Sandwich",
        instructions: [
            "Toast rösten",
            "Hähnchen und Speck braten",
            "Toast mit Mayo bestreichen",
            "Schichten mit allen Zutaten aufbauen",
            "Mit Zahnstochern fixieren"
        ],
        nutrition: { calories: 580, protein: 32, carbs: 48, fat: 28 }
    },
    {
        id: 38,
        name: "Veggie Wrap",
        emoji: "🌯",
        time: 10,
        difficulty: "Einfach",
        price: 3.50,
        servings: 1,
        categories: ["vegetarisch", "schnell"],
        ingredients: ["Tortilla", "Hummus", "Salat", "Tomaten", "Gurke", "Paprika", "Feta"],
        description: "Vegetarischer Wrap",
        instructions: [
            "Tortilla mit Hummus bestreichen",
            "Gemüse in Streifen schneiden",
            "Alle Zutaten auf Tortilla verteilen",
            "Fest einrollen",
            "Diagonal halbieren"
        ],
        nutrition: { calories: 380, protein: 14, carbs: 52, fat: 14 }
    },
    {
        id: 39,
        name: "Falafel Wrap",
        emoji: "🧆",
        time: 15,
        difficulty: "Einfach",
        price: 4.00,
        servings: 2,
        categories: ["vegetarisch", "vegan"],
        ingredients: ["Falafel", "Fladenbrot", "Hummus", "Salat", "Tomaten", "Gurke", "Tahini"],
        description: "Orientalischer Falafel Wrap",
        instructions: [
            "Falafel aufbacken oder braten",
            "Fladenbrot erwärmen",
            "Mit Hummus bestreichen",
            "Falafel und Gemüse einfüllen",
            "Mit Tahini-Sauce toppen"
        ],
        nutrition: { calories: 420, protein: 16, carbs: 58, fat: 14 }
    },
    {
        id: 40,
        name: "Grilled Cheese",
        emoji: "🧀",
        time: 10,
        difficulty: "Einfach",
        price: 2.50,
        servings: 1,
        categories: ["vegetarisch", "schnell", "günstig"],
        ingredients: ["Toast", "Käse", "Butter"],
        description: "Gegrilltes Käse-Sandwich",
        instructions: [
            "Käse zwischen Toast-Scheiben legen",
            "Butter von außen auf Toast streichen",
            "In Pfanne von beiden Seiten goldbraun braten",
            "Bis Käse geschmolzen ist"
        ],
        nutrition: { calories: 420, protein: 18, carbs: 36, fat: 24 }
    },
    {
        id: 41,
        name: "BLT Sandwich",
        emoji: "🥓",
        time: 12,
        difficulty: "Einfach",
        price: 4.00,
        servings: 1,
        categories: ["schnell"],
        ingredients: ["Toast", "Speck", "Salat", "Tomaten", "Mayonnaise"],
        description: "Bacon, Lettuce, Tomato Sandwich",
        instructions: [
            "Toast rösten",
            "Speck knusprig braten",
            "Toast mit Mayo bestreichen",
            "Mit Speck, Salat und Tomaten belegen",
            "Zusammenklappen"
        ],
        nutrition: { calories: 480, protein: 20, carbs: 38, fat: 28 }
    },
    {
        id: 42,
        name: "Chicken Wrap",
        emoji: "🌯",
        time: 15,
        difficulty: "Einfach",
        price: 4.50,
        servings: 1,
        categories: ["protein", "schnell"],
        ingredients: ["Tortilla", "Hähnchen", "Salat", "Tomate", "Käse", "Ranch-Dressing"],
        description: "Hähnchen-Wrap mit Ranch-Dressing",
        instructions: [
            "Hähnchen braten und würzen",
            "Tortilla erwärmen",
            "Mit Dressing bestreichen",
            "Hähnchen und Gemüse einfüllen",
            "Einrollen"
        ],
        nutrition: { calories: 520, protein: 36, carbs: 48, fat: 18 }
    },

    // PIZZA & FLAMMKUCHEN
    {
        id: 43,
        name: "Margherita Pizza",
        emoji: "🍕",
        time: 30,
        difficulty: "Mittel",
        price: 4.00,
        servings: 2,
        categories: ["vegetarisch"],
        ingredients: ["Pizzateig", "Tomatensoße", "Mozzarella", "Basilikum", "Olivenöl"],
        description: "Klassische italienische Pizza",
        instructions: [
            "Teig ausrollen",
            "Mit Tomatensoße bestreichen",
            "Mozzarella verteilen",
            "Bei 250°C 12-15 Min backen",
            "Mit Basilikum garnieren"
        ],
        nutrition: { calories: 580, protein: 24, carbs: 68, fat: 22 }
    },
    {
        id: 44,
        name: "Pizza Salami",
        emoji: "🍕",
        time: 30,
        difficulty: "Mittel",
        price: 5.00,
        servings: 2,
        categories: [],
        ingredients: ["Pizzateig", "Tomatensoße", "Käse", "Salami"],
        description: "Pizza mit Salami",
        instructions: [
            "Teig ausrollen",
            "Mit Soße bestreichen",
            "Käse und Salami verteilen",
            "Bei 250°C backen"
        ],
        nutrition: { calories: 680, protein: 28, carbs: 70, fat: 32 }
    },
    {
        id: 45,
        name: "Flammkuchen",
        emoji: "🥖",
        time: 25,
        difficulty: "Mittel",
        price: 4.50,
        servings: 2,
        categories: [],
        ingredients: ["Flammkuchenteig", "Schmand", "Zwiebel", "Speck"],
        description: "Elsässer Flammkuchen",
        instructions: [
            "Teig dünn ausrollen",
            "Schmand dünn verstreichen",
            "Zwiebeln und Speck verteilen",
            "Bei 250°C 12 Min backen"
        ],
        nutrition: { calories: 520, protein: 18, carbs: 52, fat: 26 }
    },
    {
        id: 46,
        name: "Veggie Pizza",
        emoji: "🍕",
        time: 30,
        difficulty: "Mittel",
        price: 5.00,
        servings: 2,
        categories: ["vegetarisch"],
        ingredients: ["Pizzateig", "Tomatensoße", "Mozzarella", "Paprika", "Pilze", "Zwiebel", "Oliven"],
        description: "Pizza mit Gemüse",
        instructions: [
            "Teig ausrollen",
            "Mit Soße bestreichen",
            "Käse und Gemüse verteilen",
            "Bei 250°C backen"
        ],
        nutrition: { calories: 540, protein: 22, carbs: 72, fat: 18 }
    },
    {
        id: 47,
        name: "Pizza Hawaii",
        emoji: "🍕",
        time: 30,
        difficulty: "Mittel",
        price: 5.00,
        servings: 2,
        categories: [],
        ingredients: ["Pizzateig", "Tomatensoße", "Käse", "Schinken", "Ananas"],
        description: "Pizza mit Schinken und Ananas",
        instructions: [
            "Teig ausrollen",
            "Mit Soße bestreichen",
            "Käse, Schinken und Ananas verteilen",
            "Bei 250°C backen"
        ],
        nutrition: { calories: 620, protein: 26, carbs: 78, fat: 22 }
    },
    {
        id: 48,
        name: "Calzone",
        emoji: "🥟",
        time: 35,
        difficulty: "Mittel",
        price: 5.00,
        servings: 2,
        categories: [],
        ingredients: ["Pizzateig", "Tomatensoße", "Mozzarella", "Schinken", "Pilze"],
        description: "Gefüllte Pizza",
        instructions: [
            "Teig ausrollen",
            "Eine Hälfte belegen",
            "Zusammenklappen und Ränder festdrücken",
            "Bei 220°C 20 Min backen"
        ],
        nutrition: { calories: 640, protein: 28, carbs: 72, fat: 26 }
    },

    // BURGER & FASTFOOD
    {
        id: 49,
        name: "Cheeseburger",
        emoji: "🍔",
        time: 20,
        difficulty: "Mittel",
        price: 5.00,
        servings: 2,
        categories: ["protein"],
        ingredients: ["Hackfleisch", "Burger-Buns", "Käse", "Salat", "Tomate", "Zwiebel", "Ketchup", "Senf"],
        description: "Klassischer Cheeseburger",
        instructions: [
            "Patties formen und würzen",
            "In Pfanne braten",
            "Mit Käse belegen und schmelzen lassen",
            "Buns toasten",
            "Mit allen Zutaten belegen"
        ],
        nutrition: { calories: 680, protein: 32, carbs: 52, fat: 36 }
    },
    {
        id: 50,
        name: "Veggie Burger",
        emoji: "🍔",
        time: 25,
        difficulty: "Mittel",
        price: 4.50,
        servings: 2,
        categories: ["vegetarisch"],
        ingredients: ["Veggie-Patty", "Burger-Buns", "Salat", "Tomate", "Gurke", "Zwiebel", "Sauce"],
        description: "Vegetarischer Burger",
        instructions: [
            "Patty nach Packungsanweisung zubereiten",
            "Buns toasten",
            "Gemüse waschen und schneiden",
            "Burger zusammenbauen"
        ],
        nutrition: { calories: 520, protein: 18, carbs: 64, fat: 20 }
    },
    {
        id: 51,
        name: "Hot Dog",
        emoji: "🌭",
        time: 10,
        difficulty: "Einfach",
        price: 3.00,
        servings: 2,
        categories: ["schnell", "günstig"],
        ingredients: ["Würstchen", "Hot-Dog-Brötchen", "Ketchup", "Senf", "Zwiebeln"],
        description: "Klassischer Hot Dog",
        instructions: [
            "Würstchen erhitzen",
            "Brötchen aufbacken",
            "Zwiebeln anbraten",
            "Würstchen ins Brötchen legen",
            "Mit Ketchup, Senf und Zwiebeln toppen"
        ],
        nutrition: { calories: 420, protein: 16, carbs: 38, fat: 22 }
    },
    {
        id: 52,
        name: "Pulled Pork Burger",
        emoji: "🍔",
        time: 180,
        difficulty: "Schwer",
        price: 8.00,
        servings: 6,
        categories: ["protein"],
        ingredients: ["Schweineschulter", "BBQ-Sauce", "Burger-Buns", "Coleslaw", "Gewürze"],
        description: "Langsam gegarter Pulled Pork Burger",
        instructions: [
            "Fleisch würzen und im Ofen bei 120°C 3 Std garen",
            "Auseinanderzupfen",
            "Mit BBQ-Sauce vermischen",
            "Auf Buns servieren mit Coleslaw"
        ],
        nutrition: { calories: 720, protein: 42, carbs: 56, fat: 36 }
    },
    {
        id: 53,
        name: "Chicken Nuggets",
        emoji: "🍗",
        time: 25,
        difficulty: "Mittel",
        price: 4.50,
        servings: 2,
        categories: ["protein"],
        ingredients: ["Hähnchenbrust", "Mehl", "Ei", "Paniermehl", "Gewürze", "Öl"],
        description: "Hausgemachte Chicken Nuggets",
        instructions: [
            "Hähnchen in Stücke schneiden",
            "In Mehl, Ei und Paniermehl wenden",
            "In heißem Öl frittieren",
            "Mit Dip servieren"
        ],
        nutrition: { calories: 480, protein: 34, carbs: 38, fat: 20 }
    },
    {
        id: 54,
        name: "Döner",
        emoji: "🥙",
        time: 15,
        difficulty: "Mittel",
        price: 5.00,
        servings: 2,
        categories: ["protein", "schnell"],
        ingredients: ["Fladenbrot", "Hähnchen", "Salat", "Tomate", "Gurke", "Zwiebel", "Joghurt-Sauce", "Scharf-Sauce"],
        description: "Türkischer Döner",
        instructions: [
            "Hähnchen in Streifen schneiden und anbraten",
            "Gemüse klein schneiden",
            "Fladenbrot erwärmen und aufschneiden",
            "Alle Zutaten einfüllen",
            "Mit Sauce verfeinern"
        ],
        nutrition: { calories: 580, protein: 38, carbs: 52, fat: 22 }
    },

    // FRÜHSTÜCK
    {
        id: 55,
        name: "Porridge",
        emoji: "🥣",
        time: 10,
        difficulty: "Einfach",
        price: 2.00,
        servings: 1,
        categories: ["vegetarisch", "schnell", "günstig"],
        ingredients: ["Haferflocken", "Milch", "Banane", "Honig", "Zimt"],
        description: "Warmer Haferbrei",
        instructions: [
            "Haferflocken mit Milch aufkochen",
            "5 Min köcheln lassen",
            "Banane in Scheiben schneiden",
            "Porridge mit Obst, Honig und Zimt toppen"
        ],
        nutrition: { calories: 320, protein: 10, carbs: 56, fat: 6 }
    },
    {
        id: 56,
        name: "French Toast",
        emoji: "🍞",
        time: 15,
        difficulty: "Einfach",
        price: 2.50,
        servings: 2,
        categories: ["vegetarisch"],
        ingredients: ["Toast", "Eier", "Milch", "Zimt", "Zucker", "Butter"],
        description: "Armer Ritter",
        instructions: [
            "Eier mit Milch, Zimt und Zucker verquirlen",
            "Toast darin einweichen",
            "In Butter goldbraun braten",
            "Mit Puderzucker bestreuen"
        ],
        nutrition: { calories: 380, protein: 12, carbs: 48, fat: 16 }
    },
    {
        id: 57,
        name: "Müsli Bowl",
        emoji: "🥣",
        time: 5,
        difficulty: "Einfach",
        price: 2.50,
        servings: 1,
        categories: ["vegetarisch", "schnell"],
        ingredients: ["Müsli", "Joghurt", "Beeren", "Honig", "Nüsse"],
        description: "Frische Müsli Bowl",
        instructions: [
            "Joghurt in Bowl geben",
            "Müsli darüber streuen",
            "Mit Beeren und Nüssen toppen",
            "Mit Honig beträufeln"
        ],
        nutrition: { calories: 380, protein: 14, carbs: 58, fat: 12 }
    },
    {
        id: 58,
        name: "Avocado Toast",
        emoji: "🥑",
        time: 10,
        difficulty: "Einfach",
        price: 3.50,
        servings: 1,
        categories: ["vegetarisch", "vegan", "schnell"],
        ingredients: ["Brot", "Avocado", "Zitrone", "Salz", "Pfeffer", "Chiliflocken"],
        description: "Avocado auf Toast",
        instructions: [
            "Brot toasten",
            "Avocado zerdrücken",
            "Mit Zitrone, Salz und Pfeffer würzen",
            "Auf Toast streichen",
            "Mit Chiliflocken toppen"
        ],
        nutrition: { calories: 320, protein: 8, carbs: 32, fat: 18 }
    },
    {
        id: 59,
        name: "Smoothie Bowl",
        emoji: "🥤",
        time: 10,
        difficulty: "Einfach",
        price: 3.50,
        servings: 1,
        categories: ["vegetarisch", "vegan", "schnell"],
        ingredients: ["Banane", "Beeren", "Hafermilch", "Granola", "Kokosflocken", "Chiasamen"],
        description: "Cremige Smoothie Bowl",
        instructions: [
            "Banane und Beeren mit Milch mixen",
            "In Bowl geben",
            "Mit Granola, Kokosflocken und Samen toppen"
        ],
        nutrition: { calories: 420, protein: 10, carbs: 68, fat: 14 }
    },
    {
        id: 60,
        name: "Bagel mit Frischkäse",
        emoji: "🥯",
        time: 10,
        difficulty: "Einfach",
        price: 3.00,
        servings: 1,
        categories: ["vegetarisch", "schnell"],
        ingredients: ["Bagel", "Frischkäse", "Lachs", "Gurke", "Zwiebel", "Dill"],
        description: "New York Style Bagel",
        instructions: [
            "Bagel aufschneiden und toasten",
            "Mit Frischkäse bestreichen",
            "Mit Lachs, Gurke und Zwiebel belegen",
            "Mit Dill garnieren"
        ],
        nutrition: { calories: 420, protein: 18, carbs: 48, fat: 18 }
    },

    // SNACKS & FINGERFOOD
    {
        id: 61,
        name: "Nachos mit Käse",
        emoji: "🧀",
        time: 15,
        difficulty: "Einfach",
        price: 3.50,
        servings: 2,
        categories: ["vegetarisch", "schnell"],
        ingredients: ["Nachos", "Käse", "Jalapeños", "Saure Sahne", "Guacamole", "Salsa"],
        description: "Überbackene Nachos",
        instructions: [
            "Nachos auf Backblech verteilen",
            "Mit geriebenem Käse bestreuen",
            "Im Ofen überbacken",
            "Mit Jalapeños, Guacamole und Salsa servieren"
        ],
        nutrition: { calories: 480, protein: 14, carbs: 52, fat: 24 }
    },
    {
        id: 62,
        name: "Bruschetta",
        emoji: "🍞",
        time: 15,
        difficulty: "Einfach",
        price: 3.00,
        servings: 2,
        categories: ["vegetarisch", "vegan", "schnell"],
        ingredients: ["Baguette", "Tomaten", "Knoblauch", "Basilikum", "Olivenöl", "Balsamico"],
        description: "Italienische Vorspeise",
        instructions: [
            "Baguette in Scheiben schneiden",
            "Im Ofen rösten",
            "Mit Knoblauch einreiben",
            "Tomaten-Mix darauf verteilen",
            "Mit Olivenöl beträufeln"
        ],
        nutrition: { calories: 280, protein: 8, carbs: 42, fat: 10 }
    },
    {
        id: 63,
        name: "Mozzarella Sticks",
        emoji: "🧀",
        time: 25,
        difficulty: "Mittel",
        price: 4.00,
        servings: 2,
        categories: ["vegetarisch"],
        ingredients: ["Mozzarella", "Mehl", "Ei", "Paniermehl", "Italienische Kräuter", "Öl"],
        description: "Frittierte Käsesticks",
        instructions: [
            "Mozzarella in Sticks schneiden",
            "In Mehl, Ei und gewürztem Paniermehl wenden",
            "Einfrieren für 15 Min",
            "In heißem Öl frittieren",
            "Mit Tomatensauce servieren"
        ],
        nutrition: { calories: 420, protein: 18, carbs: 32, fat: 24 }
    },
    {
        id: 64,
        name: "Quesadilla",
        emoji: "🌮",
        time: 15,
        difficulty: "Einfach",
        price: 3.50,
        servings: 2,
        categories: ["vegetarisch", "schnell"],
        ingredients: ["Tortillas", "Käse", "Paprika", "Mais", "Bohnen", "Salsa"],
        description: "Mexikanische Käse-Tortilla",
        instructions: [
            "Tortilla mit Käse und Gemüse belegen",
            "Zweite Tortilla darauf legen",
            "In Pfanne von beiden Seiten braten",
            "In Stücke schneiden",
            "Mit Salsa und Saurer Sahne servieren"
        ],
        nutrition: { calories: 420, protein: 16, carbs: 48, fat: 18 }
    },
    {
        id: 65,
        name: "Chicken Wings",
        emoji: "🍗",
        time: 40,
        difficulty: "Mittel",
        price: 5.00,
        servings: 2,
        categories: ["protein"],
        ingredients: ["Hähnchenflügel", "BBQ-Sauce", "Honig", "Knoblauch", "Paprika", "Öl"],
        description: "Knusprige BBQ Chicken Wings",
        instructions: [
            "Flügel würzen",
            "Im Ofen bei 200°C 30 Min backen",
            "Mit BBQ-Sauce glasieren",
            "Weitere 10 Min backen",
            "Mit Ranch-Dip servieren"
        ],
        nutrition: { calories: 580, protein: 42, carbs: 24, fat: 36 }
    },
    {
        id: 66,
        name: "Hummus",
        emoji: "🥙",
        time: 10,
        difficulty: "Einfach",
        price: 2.50,
        servings: 4,
        categories: ["vegetarisch", "vegan", "protein", "günstig"],
        ingredients: ["Kichererbsen", "Tahini", "Zitrone", "Knoblauch", "Olivenöl", "Kreuzkümmel"],
        description: "Cremiger Kichererbsen-Dip",
        instructions: [
            "Alle Zutaten in Mixer geben",
            "Bis zur gewünschten Konsistenz mixen",
            "Mit Olivenöl beträufeln",
            "Mit Gemüsesticks oder Brot servieren"
        ],
        nutrition: { calories: 180, protein: 8, carbs: 18, fat: 10 }
    },

    // AUFLÄUFE
    {
        id: 67,
        name: "Lasagne",
        emoji: "🍝",
        time: 90,
        difficulty: "Mittel",
        price: 6.00,
        servings: 6,
        categories: [],
        ingredients: ["Lasagne-Platten", "Hackfleisch", "Tomatensoße", "Béchamel", "Parmesan", "Zwiebel", "Knoblauch"],
        description: "Klassische italienische Lasagne",
        instructions: [
            "Bolognese-Sauce zubereiten",
            "Béchamel-Sauce machen",
            "Schichten: Sauce, Platten, Béchamel",
            "Mit Käse bestreuen",
            "Bei 180°C 45 Min backen"
        ],
        nutrition: { calories: 520, protein: 28, carbs: 48, fat: 24 }
    },
    {
        id: 68,
        name: "Gemüse-Auflauf",
        emoji: "🥘",
        time: 50,
        difficulty: "Einfach",
        price: 4.50,
        servings: 4,
        categories: ["vegetarisch"],
        ingredients: ["Brokkoli", "Blumenkohl", "Sahne", "Käse", "Eier", "Muskatnuss"],
        description: "Cremiger Gemüseauflauf",
        instructions: [
            "Gemüse blanchieren",
            "In Auflaufform geben",
            "Sahne-Ei-Mischung darüber gießen",
            "Mit Käse bestreuen",
            "Bei 180°C 35 Min backen"
        ],
        nutrition: { calories: 320, protein: 16, carbs: 18, fat: 22 }
    },
    {
        id: 69,
        name: "Nudelauflauf",
        emoji: "🍝",
        time: 45,
        difficulty: "Einfach",
        price: 4.00,
        servings: 4,
        categories: ["vegetarisch"],
        ingredients: ["Nudeln", "Schinken", "Erbsen", "Sahne", "Käse", "Eier"],
        description: "Klassischer Nudelauflauf",
        instructions: [
            "Nudeln kochen",
            "Mit Schinken und Erbsen mischen",
            "Sahne-Ei-Mischung hinzufügen",
            "In Form geben und mit Käse bestreuen",
            "Bei 180°C 30 Min backen"
        ],
        nutrition: { calories: 480, protein: 22, carbs: 52, fat: 20 }
    },
    {
        id: 70,
        name: "Moussaka",
        emoji: "🍆",
        time: 90,
        difficulty: "Schwer",
        price: 7.00,
        servings: 6,
        categories: [],
        ingredients: ["Auberginen", "Hackfleisch", "Tomaten", "Kartoffeln", "Béchamel", "Zimt", "Käse"],
        description: "Griechischer Auflauf",
        instructions: [
            "Auberginen und Kartoffeln braten",
            "Hackfleisch-Sauce zubereiten",
            "Schichten: Kartoffeln, Auberginen, Fleisch",
            "Béchamel darüber gießen",
            "Bei 180°C 45 Min backen"
        ],
        nutrition: { calories: 480, protein: 26, carbs: 38, fat: 24 }
    },

    // VEGETARISCH/VEGAN
    {
        id: 71,
        name: "Buddha Bowl",
        emoji: "🥗",
        time: 30,
        difficulty: "Einfach",
        price: 5.00,
        servings: 2,
        categories: ["vegetarisch", "vegan", "protein"],
        ingredients: ["Quinoa", "Süßkartoffel", "Kichererbsen", "Avocado", "Spinat", "Tahini"],
        description: "Nährstoffreiche Buddha Bowl",
        instructions: [
            "Quinoa kochen",
            "Süßkartoffel im Ofen rösten",
            "Kichererbsen würzen und anbraten",
            "Alle Komponenten in Bowl anrichten",
            "Mit Tahini-Dressing toppen"
        ],
        nutrition: { calories: 520, protein: 18, carbs: 68, fat: 20 }
    },
    {
        id: 72,
        name: "Linsen-Dal",
        emoji: "🍛",
        time: 35,
        difficulty: "Einfach",
        price: 3.00,
        servings: 4,
        categories: ["vegetarisch", "vegan", "protein", "günstig"],
        ingredients: ["Rote Linsen", "Kokosmilch", "Tomaten", "Curry", "Ingwer", "Knoblauch", "Spinat"],
        description: "Indisches Linsen-Curry",
        instructions: [
            "Zwiebel, Ingwer und Knoblauch anbraten",
            "Curry-Gewürze hinzufügen",
            "Linsen, Tomaten und Kokosmilch dazugeben",
            "25 Min köcheln",
            "Spinat unterheben und mit Reis servieren"
        ],
        nutrition: { calories: 320, protein: 16, carbs: 48, fat: 8 }
    },
    {
        id: 73,
        name: "Veganes Chili",
        emoji: "🌶️",
        time: 40,
        difficulty: "Einfach",
        price: 4.00,
        servings: 4,
        categories: ["vegetarisch", "vegan", "protein"],
        ingredients: ["Kidneybohnen", "Schwarze Bohnen", "Tomaten", "Mais", "Paprika", "Chili", "Kreuzkümmel"],
        description: "Herzhaftes veganes Chili",
        instructions: [
            "Zwiebel und Paprika anbraten",
            "Gewürze hinzufügen",
            "Bohnen, Tomaten und Mais dazugeben",
            "30 Min köcheln lassen",
            "Mit Avocado und Koriander servieren"
        ],
        nutrition: { calories: 280, protein: 14, carbs: 48, fat: 4 }
    },
    {
        id: 74,
        name: "Falafel",
        emoji: "🧆",
        time: 30,
        difficulty: "Mittel",
        price: 3.50,
        servings: 4,
        categories: ["vegetarisch", "vegan", "protein"],
        ingredients: ["Kichererbsen", "Petersilie", "Knoblauch", "Kreuzkümmel", "Koriander", "Mehl", "Öl"],
        description: "Orientalische Kichererbsen-Bällchen",
        instructions: [
            "Kichererbsen mit Kräutern und Gewürzen mixen",
            "Zu Bällchen formen",
            "In Öl frittieren oder backen",
            "Mit Hummus und Salat servieren"
        ],
        nutrition: { calories: 320, protein: 14, carbs: 42, fat: 12 }
    },
    {
        id: 75,
        name: "Tofu-Scramble",
        emoji: "🍳",
        time: 15,
        difficulty: "Einfach",
        price: 3.50,
        servings: 2,
        categories: ["vegetarisch", "vegan", "protein", "schnell"],
        ingredients: ["Tofu", "Kurkuma", "Paprika", "Tomaten", "Spinat", "Zwiebel", "Hefeflocken"],
        description: "Vegane Rührei-Alternative",
        instructions: [
            "Tofu zerbröseln",
            "Zwiebel anbraten",
            "Tofu mit Kurkuma hinzufügen",
            "Gemüse unterheben",
            "Mit Hefeflocken würzen"
        ],
        nutrition: { calories: 220, protein: 18, carbs: 12, fat: 12 }
    },
    {
        id: 76,
        name: "Ratatouille",
        emoji: "🍆",
        time: 50,
        difficulty: "Mittel",
        price: 4.50,
        servings: 4,
        categories: ["vegetarisch", "vegan"],
        ingredients: ["Aubergine", "Zucchini", "Paprika", "Tomaten", "Zwiebel", "Knoblauch", "Kräuter"],
        description: "Französischer Gemüseeintopf",
        instructions: [
            "Gemüse in Scheiben schneiden",
            "Tomatensoße in Auflaufform geben",
            "Gemüse überlappend anrichten",
            "Mit Kräutern würzen",
            "Bei 180°C 40 Min backen"
        ],
        nutrition: { calories: 180, protein: 6, carbs: 28, fat: 6 }
    },

    // ASIATISCHE GERICHTE
    {
        id: 77,
        name: "Pad Thai",
        emoji: "🍜",
        time: 25,
        difficulty: "Mittel",
        price: 5.00,
        servings: 2,
        categories: ["schnell"],
        ingredients: ["Reisnudeln", "Eier", "Tofu", "Sojasprossen", "Erdnüsse", "Tamarinde", "Limette"],
        description: "Thailändisches Nudelgericht",
        instructions: [
            "Nudeln einweichen",
            "Tofu und Ei braten",
            "Nudeln mit Sauce anbraten",
            "Sojasprossen hinzufügen",
            "Mit Erdnüssen und Limette servieren"
        ],
        nutrition: { calories: 520, protein: 20, carbs: 68, fat: 18 }
    },
    {
        id: 78,
        name: "Sushi Bowls",
        emoji: "🍣",
        time: 30,
        difficulty: "Einfach",
        price: 5.50,
        servings: 2,
        categories: ["schnell", "protein"],
        ingredients: ["Sushi-Reis", "Lachs", "Avocado", "Gurke", "Edamame", "Sojasauce", "Sesam"],
        description: "Dekonstruiertes Sushi",
        instructions: [
            "Sushi-Reis kochen und würzen",
            "Lachs in Würfel schneiden",
            "Gemüse vorbereiten",
            "Alles in Bowl anrichten",
            "Mit Sojasauce und Sesam garnieren"
        ],
        nutrition: { calories: 580, protein: 32, carbs: 72, fat: 18 }
    },
    {
        id: 79,
        name: "Pho Suppe",
        emoji: "🍜",
        time: 45,
        difficulty: "Mittel",
        price: 6.00,
        servings: 2,
        categories: ["protein"],
        ingredients: ["Reisnudeln", "Rinderbrühe", "Rindfleisch", "Sternanis", "Ingwer", "Koriander", "Limette"],
        description: "Vietnamesische Nudelsuppe",
        instructions: [
            "Brühe mit Gewürzen 30 Min köcheln",
            "Nudeln separat kochen",
            "Rindfleisch dünn schneiden",
            "Nudeln in Schüssel geben",
            "Mit heißer Brühe übergießen"
        ],
        nutrition: { calories: 480, protein: 34, carbs: 58, fat: 12 }
    },
    {
        id: 80,
        name: "Banh Mi",
        emoji: "🥖",
        time: 20,
        difficulty: "Mittel",
        price: 4.50,
        servings: 2,
        categories: ["schnell"],
        ingredients: ["Baguette", "Schweinefleisch", "Koriander", "Gurke", "Karotten", "Chili", "Mayo"],
        description: "Vietnamesisches Sandwich",
        instructions: [
            "Fleisch marinieren und braten",
            "Gemüse einlegen",
            "Baguette aufschneiden",
            "Mit Mayo bestreichen",
            "Alle Zutaten einfüllen"
        ],
        nutrition: { calories: 520, protein: 28, carbs: 58, fat: 18 }
    },
    {
        id: 81,
        name: "Kimchi Fried Rice",
        emoji: "🍚",
        time: 20,
        difficulty: "Einfach",
        price: 4.00,
        servings: 2,
        categories: ["schnell"],
        ingredients: ["Reis", "Kimchi", "Eier", "Frühlingszwiebeln", "Sesamöl", "Sojasauce"],
        description: "Koreanischer gebratener Reis",
        instructions: [
            "Reis vom Vortag verwenden",
            "Kimchi klein schneiden",
            "Alles zusammen anbraten",
            "Spiegelei darauf setzen",
            "Mit Sesam garnieren"
        ],
        nutrition: { calories: 460, protein: 16, carbs: 68, fat: 14 }
    },
    {
        id: 82,
        name: "Gyoza",
        emoji: "🥟",
        time: 40,
        difficulty: "Schwer",
        price: 5.00,
        servings: 4,
        categories: [],
        ingredients: ["Gyoza-Teig", "Hackfleisch", "Kohl", "Ingwer", "Knoblauch", "Sojasauce", "Sesamöl"],
        description: "Japanische Teigtaschen",
        instructions: [
            "Füllung aus Fleisch und Gemüse machen",
            "Teig füllen und falten",
            "In Pfanne anbraten",
            "Mit Wasser ablöschen und dämpfen",
            "Mit Dip servieren"
        ],
        nutrition: { calories: 320, protein: 18, carbs: 38, fat: 12 }
    },

    // BEILAGEN
    {
        id: 83,
        name: "Coleslaw",
        emoji: "🥗",
        time: 15,
        difficulty: "Einfach",
        price: 2.50,
        servings: 4,
        categories: ["vegetarisch", "günstig"],
        ingredients: ["Weißkohl", "Karotten", "Mayonnaise", "Essig", "Zucker", "Salz"],
        description: "Amerikanischer Krautsalat",
        instructions: [
            "Kohl und Karotten fein hobeln",
            "Dressing aus Mayo, Essig und Zucker machen",
            "Alles gut vermischen",
            "Mindestens 30 Min ziehen lassen"
        ],
        nutrition: { calories: 180, protein: 2, carbs: 16, fat: 12 }
    },
    {
        id: 84,
        name: "Knoblauchbrot",
        emoji: "🥖",
        time: 15,
        difficulty: "Einfach",
        price: 2.00,
        servings: 4,
        categories: ["vegetarisch", "vegan", "günstig"],
        ingredients: ["Baguette", "Knoblauch", "Butter", "Petersilie"],
        description: "Knuspriges Knoblauchbrot",
        instructions: [
            "Butter mit gepresstem Knoblauch mischen",
            "Petersilie hinzufügen",
            "Baguette einschneiden",
            "Butter in Schnitte streichen",
            "Im Ofen 10 Min backen"
        ],
        nutrition: { calories: 220, protein: 6, carbs: 32, fat: 8 }
    },
    {
        id: 85,
        name: "Pommes Frites",
        emoji: "🍟",
        time: 35,
        difficulty: "Mittel",
        price: 2.00,
        servings: 2,
        categories: ["vegetarisch", "vegan", "günstig"],
        ingredients: ["Kartoffeln", "Öl", "Salz"],
        description: "Hausgemachte Pommes",
        instructions: [
            "Kartoffeln in Stifte schneiden",
            "In kaltem Wasser einweichen",
            "Trocknen und mit Öl vermischen",
            "Bei 220°C 30 Min backen",
            "Zwischendurch wenden"
        ],
        nutrition: { calories: 320, protein: 4, carbs: 52, fat: 10 }
    },
    {
        id: 86,
        name: "Reis mit Gemüse",
        emoji: "🍚",
        time: 25,
        difficulty: "Einfach",
        price: 2.50,
        servings: 2,
        categories: ["vegetarisch", "vegan", "günstig"],
        ingredients: ["Reis", "Erbsen", "Karotten", "Mais", "Sojasauce"],
        description: "Bunter Gemüsereis",
        instructions: [
            "Reis kochen",
            "Gemüse blanchieren",
            "Alles vermischen",
            "Mit Sojasauce würzen"
        ],
        nutrition: { calories: 280, protein: 8, carbs: 58, fat: 2 }
    },
    {
        id: 87,
        name: "Tzatziki",
        emoji: "🥒",
        time: 15,
        difficulty: "Einfach",
        price: 2.50,
        servings: 4,
        categories: ["vegetarisch", "günstig"],
        ingredients: ["Joghurt", "Gurke", "Knoblauch", "Dill", "Zitrone", "Olivenöl"],
        description: "Griechischer Joghurt-Dip",
        instructions: [
            "Gurke raspeln und Wasser ausdrücken",
            "Mit Joghurt vermischen",
            "Knoblauch pressen und hinzufügen",
            "Mit Dill und Zitrone würzen",
            "Mindestens 1 Std ziehen lassen"
        ],
        nutrition: { calories: 80, protein: 4, carbs: 8, fat: 4 }
    },
    {
        id: 88,
        name: "Guacamole",
        emoji: "🥑",
        time: 10,
        difficulty: "Einfach",
        price: 3.00,
        servings: 4,
        categories: ["vegetarisch", "vegan"],
        ingredients: ["Avocado", "Tomaten", "Zwiebel", "Limette", "Koriander", "Chili"],
        description: "Mexikanischer Avocado-Dip",
        instructions: [
            "Avocados zerdrücken",
            "Tomaten und Zwiebel klein würfeln",
            "Alles vermischen",
            "Mit Limette und Gewürzen abschmecken",
            "Sofort servieren"
        ],
        nutrition: { calories: 180, protein: 2, carbs: 12, fat: 16 }
    },

    // DESSERTS & SÜSSSPEISEN
    {
        id: 89,
        name: "Pancakes",
        emoji: "🥞",
        time: 20,
        difficulty: "Einfach",
        price: 2.50,
        servings: 4,
        categories: ["vegetarisch"],
        ingredients: ["Mehl", "Eier", "Milch", "Backpulver", "Zucker", "Butter"],
        description: "Amerikanische Pancakes",
        instructions: [
            "Alle Zutaten zu Teig verrühren",
            "10 Min ruhen lassen",
            "Kleine Portionen in Pfanne backen",
            "Wenden wenn Blasen entstehen",
            "Mit Ahornsirup servieren"
        ],
        nutrition: { calories: 320, protein: 8, carbs: 48, fat: 10 }
    },
    {
        id: 90,
        name: "Brownies",
        emoji: "🍫",
        time: 40,
        difficulty: "Einfach",
        price: 4.00,
        servings: 12,
        categories: ["vegetarisch"],
        ingredients: ["Schokolade", "Butter", "Zucker", "Eier", "Mehl", "Kakao"],
        description: "Schokoladige Brownies",
        instructions: [
            "Schokolade und Butter schmelzen",
            "Zucker und Eier unterrühren",
            "Mehl und Kakao hinzufügen",
            "In Form geben",
            "Bei 180°C 25 Min backen"
        ],
        nutrition: { calories: 280, protein: 4, carbs: 36, fat: 14 }
    },
    {
        id: 91,
        name: "Apfelkuchen",
        emoji: "🍎",
        time: 60,
        difficulty: "Mittel",
        price: 4.50,
        servings: 12,
        categories: ["vegetarisch"],
        ingredients: ["Äpfel", "Mehl", "Butter", "Zucker", "Eier", "Zimt", "Backpulver"],
        description: "Klassischer deutscher Apfelkuchen",
        instructions: [
            "Mürbeteig zubereiten",
            "In Springform drücken",
            "Äpfel schälen und schneiden",
            "Auf Teig verteilen",
            "Bei 180°C 45 Min backen"
        ],
        nutrition: { calories: 240, protein: 4, carbs: 38, fat: 8 }
    },
    {
        id: 92,
        name: "Tiramisu",
        emoji: "☕",
        time: 30,
        difficulty: "Mittel",
        price: 6.00,
        servings: 8,
        categories: ["vegetarisch"],
        ingredients: ["Löffelbiskuits", "Mascarpone", "Eier", "Zucker", "Kaffee", "Kakao"],
        description: "Italienisches Dessert",
        instructions: [
            "Mascarpone-Creme zubereiten",
            "Kaffee abkühlen lassen",
            "Biskuits in Kaffee tränken",
            "Schichten mit Creme abwechseln",
            "Mindestens 4 Std kühlen"
        ],
        nutrition: { calories: 380, protein: 8, carbs: 42, fat: 20 }
    },
    {
        id: 93,
        name: "Bananenbrot",
        emoji: "🍌",
        time: 70,
        difficulty: "Einfach",
        price: 3.00,
        servings: 10,
        categories: ["vegetarisch"],
        ingredients: ["Bananen", "Mehl", "Zucker", "Eier", "Butter", "Backpulver", "Zimt"],
        description: "Saftiges Bananenbrot",
        instructions: [
            "Bananen zerdrücken",
            "Mit Zucker, Eiern und Butter vermischen",
            "Mehl und Backpulver hinzufügen",
            "In Kastenform füllen",
            "Bei 180°C 60 Min backen"
        ],
        nutrition: { calories: 220, protein: 4, carbs: 38, fat: 6 }
    },
    {
        id: 94,
        name: "Käsekuchen",
        emoji: "🍰",
        time: 90,
        difficulty: "Mittel",
        price: 5.00,
        servings: 12,
        categories: ["vegetarisch"],
        ingredients: ["Quark", "Eier", "Zucker", "Mehl", "Butter", "Zitrone"],
        description: "Deutscher Käsekuchen",
        instructions: [
            "Mürbeteig für Boden zubereiten",
            "Quark-Masse anrühren",
            "Auf Teig geben",
            "Bei 180°C 60 Min backen",
            "Komplett auskühlen lassen"
        ],
        nutrition: { calories: 280, protein: 10, carbs: 32, fat: 12 }
    },

    // WEITERE EINFACHE GERICHTE
    {
        id: 95,
        name: "Spiegelei mit Speck",
        emoji: "🍳",
        time: 10,
        difficulty: "Einfach",
        price: 3.00,
        servings: 1,
        categories: ["schnell", "protein", "günstig"],
        ingredients: ["Eier", "Speck", "Butter", "Salz", "Pfeffer"],
        description: "Klassisches Frühstück",
        instructions: [
            "Speck in Pfanne knusprig braten",
            "Beiseite stellen",
            "Eier in Butter braten",
            "Mit Salz und Pfeffer würzen",
            "Zusammen servieren"
        ],
        nutrition: { calories: 380, protein: 22, carbs: 2, fat: 32 }
    },
    {
        id: 96,
        name: "Tomaten-Mozzarella-Auflauf",
        emoji: "🍅",
        time: 35,
        difficulty: "Einfach",
        price: 4.50,
        servings: 2,
        categories: ["vegetarisch"],
        ingredients: ["Tomaten", "Mozzarella", "Basilikum", "Olivenöl", "Knoblauch", "Brot"],
        description: "Mediterraner Auflauf",
        instructions: [
            "Tomaten und Mozzarella in Scheiben schneiden",
            "Abwechselnd in Auflaufform schichten",
            "Mit Knoblauch, Basilikum und Öl würzen",
            "Bei 180°C 25 Min backen",
            "Mit Brot servieren"
        ],
        nutrition: { calories: 420, protein: 22, carbs: 28, fat: 26 }
    },
    {
        id: 97,
        name: "Tortellini in Sahnesauce",
        emoji: "🍝",
        time: 15,
        difficulty: "Einfach",
        price: 4.00,
        servings: 2,
        categories: ["vegetarisch", "schnell"],
        ingredients: ["Tortellini", "Sahne", "Parmesan", "Knoblauch", "Spinat"],
        description: "Cremige Tortellini",
        instructions: [
            "Tortellini nach Packungsanweisung kochen",
            "Knoblauch anbraten",
            "Sahne hinzufügen und einkochen",
            "Spinat unterheben",
            "Tortellini dazugeben und mit Parmesan servieren"
        ],
        nutrition: { calories: 520, protein: 20, carbs: 54, fat: 26 }
    },
    {
        id: 98,
        name: "Hackfleisch-Reis-Pfanne",
        emoji: "🍚",
        time: 25,
        difficulty: "Einfach",
        price: 4.50,
        servings: 4,
        categories: ["protein"],
        ingredients: ["Hackfleisch", "Reis", "Paprika", "Zwiebel", "Tomaten", "Gewürze"],
        description: "One-Pot Reis-Pfanne",
        instructions: [
            "Hackfleisch anbraten",
            "Zwiebel und Paprika hinzufügen",
            "Reis und Tomaten dazugeben",
            "Mit Brühe ablöschen",
            "20 Min köcheln lassen"
        ],
        nutrition: { calories: 480, protein: 28, carbs: 58, fat: 14 }
    },
    {
        id: 99,
        name: "Eiersalat",
        emoji: "🥚",
        time: 20,
        difficulty: "Einfach",
        price: 2.50,
        servings: 2,
        categories: ["vegetarisch", "protein", "günstig"],
        ingredients: ["Eier", "Mayonnaise", "Senf", "Schnittlauch", "Salz", "Pfeffer"],
        description: "Klassischer Eiersalat",
        instructions: [
            "Eier hart kochen",
            "Abkühlen und schälen",
            "Grob hacken",
            "Mit Mayo und Senf vermischen",
            "Mit Schnittlauch garnieren"
        ],
        nutrition: { calories: 320, protein: 18, carbs: 4, fat: 26 }
    },
    {
        id: 100,
        name: "Gemüse-Curry-Suppe",
        emoji: "🍲",
        time: 30,
        difficulty: "Einfach",
        price: 3.50,
        servings: 4,
        categories: ["vegetarisch", "vegan"],
        ingredients: ["Süßkartoffel", "Karotten", "Kokosmilch", "Curry", "Ingwer", "Gemüsebrühe"],
        description: "Cremige Curry-Suppe",
        instructions: [
            "Gemüse würfeln",
            "Ingwer und Curry anbraten",
            "Gemüse hinzufügen",
            "Mit Brühe und Kokosmilch ablöschen",
            "20 Min köcheln und pürieren"
        ],
        nutrition: { calories: 240, protein: 4, carbs: 32, fat: 10 }
    },

    // BONUS: 10 weitere einfache Rezepte
    {
        id: 101,
        name: "Toast Hawaii",
        emoji: "🍞",
        time: 10,
        difficulty: "Einfach",
        price: 2.50,
        servings: 1,
        categories: ["schnell", "günstig"],
        ingredients: ["Toast", "Schinken", "Ananas", "Käse"],
        description: "Überbackener Toast",
        instructions: [
            "Toast toasten",
            "Mit Schinken und Ananas belegen",
            "Käse darauf legen",
            "Im Ofen überbacken"
        ],
        nutrition: { calories: 320, protein: 18, carbs: 36, fat: 12 }
    },
    {
        id: 102,
        name: "Rote Beete Salat",
        emoji: "🥗",
        time: 15,
        difficulty: "Einfach",
        price: 3.00,
        servings: 2,
        categories: ["vegetarisch", "vegan", "günstig"],
        ingredients: ["Rote Beete", "Walnüsse", "Rucola", "Balsamico", "Olivenöl"],
        description: "Nährstoffreicher Salat",
        instructions: [
            "Rote Beete würfeln",
            "Rucola waschen",
            "Walnüsse rösten",
            "Alles vermischen",
            "Mit Balsamico-Dressing anmachen"
        ],
        nutrition: { calories: 220, protein: 6, carbs: 24, fat: 12 }
    },
    {
        id: 103,
        name: "Omelett-Reis (Omurice)",
        emoji: "🍳",
        time: 20,
        difficulty: "Mittel",
        price: 4.00,
        servings: 2,
        categories: ["protein"],
        ingredients: ["Reis", "Eier", "Hähnchen", "Erbsen", "Ketchup", "Sojasauce"],
        description: "Japanisches Comfort Food",
        instructions: [
            "Gebratenen Reis mit Hähnchen zubereiten",
            "Dünn Omelett braten",
            "Reis in Omelett einwickeln",
            "Mit Ketchup dekorieren"
        ],
        nutrition: { calories: 480, protein: 24, carbs: 62, fat: 14 }
    },
    {
        id: 104,
        name: "Gazpacho",
        emoji: "🥫",
        time: 20,
        difficulty: "Einfach",
        price: 3.50,
        servings: 4,
        categories: ["vegetarisch", "vegan"],
        ingredients: ["Tomaten", "Gurke", "Paprika", "Knoblauch", "Olivenöl", "Essig"],
        description: "Kalte spanische Suppe",
        instructions: [
            "Gemüse grob schneiden",
            "Alles im Mixer pürieren",
            "Mit Olivenöl und Essig abschmecken",
            "Mindestens 2 Std kühlen",
            "Kalt servieren"
        ],
        nutrition: { calories: 120, protein: 3, carbs: 18, fat: 5 }
    },
    {
        id: 105,
        name: "Hackbällchen in Tomatensoße",
        emoji: "🍝",
        time: 35,
        difficulty: "Einfach",
        price: 5.00,
        servings: 4,
        categories: ["protein"],
        ingredients: ["Hackfleisch", "Tomaten", "Zwiebel", "Knoblauch", "Basilikum", "Pasta"],
        description: "Italienische Hackbällchen",
        instructions: [
            "Hackbällchen formen und anbraten",
            "Tomatensoße zubereiten",
            "Bällchen in Soße 20 Min köcheln",
            "Pasta kochen",
            "Zusammen servieren"
        ],
        nutrition: { calories: 520, protein: 32, carbs: 58, fat: 16 }
    },
    {
        id: 106,
        name: "Couscous mit geröstetem Gemüse",
        emoji: "🥘",
        time: 30,
        difficulty: "Einfach",
        price: 4.00,
        servings: 2,
        categories: ["vegetarisch", "vegan"],
        ingredients: ["Couscous", "Zucchini", "Paprika", "Aubergine", "Kichererbsen", "Harissa"],
        description: "Orientalisches Gericht",
        instructions: [
            "Gemüse würfeln und im Ofen rösten",
            "Couscous mit heißem Wasser übergießen",
            "Kichererbsen erwärmen",
            "Alles vermischen",
            "Mit Harissa würzen"
        ],
        nutrition: { calories: 420, protein: 14, carbs: 68, fat: 10 }
    },
    {
        id: 107,
        name: "Spinat-Ricotta-Cannelloni",
        emoji: "🍝",
        time: 50,
        difficulty: "Mittel",
        price: 5.50,
        servings: 4,
        categories: ["vegetarisch"],
        ingredients: ["Cannelloni", "Spinat", "Ricotta", "Tomatensoße", "Parmesan", "Muskatnuss"],
        description: "Gefüllte Pasta",
        instructions: [
            "Spinat mit Ricotta mischen",
            "Cannelloni füllen",
            "In Auflaufform mit Tomatensoße legen",
            "Mit Parmesan bestreuen",
            "Bei 180°C 35 Min backen"
        ],
        nutrition: { calories: 420, protein: 20, carbs: 52, fat: 14 }
    },
    {
        id: 108,
        name: "Blumenkohl-Wings",
        emoji: "🥦",
        time: 35,
        difficulty: "Einfach",
        price: 3.50,
        servings: 2,
        categories: ["vegetarisch", "vegan"],
        ingredients: ["Blumenkohl", "Mehl", "Paprika", "Knoblauch", "Buffalo-Sauce"],
        description: "Vegetarische Alternative zu Wings",
        instructions: [
            "Blumenkohl in Röschen teilen",
            "In Teig wenden",
            "Im Ofen 25 Min backen",
            "Mit Buffalo-Sauce glasieren",
            "Weitere 5 Min backen"
        ],
        nutrition: { calories: 220, protein: 8, carbs: 38, fat: 4 }
    },
    {
        id: 109,
        name: "Egg Fried Rice",
        emoji: "🍳",
        time: 15,
        difficulty: "Einfach",
        price: 2.50,
        servings: 2,
        categories: ["vegetarisch", "schnell", "günstig"],
        ingredients: ["Reis", "Eier", "Erbsen", "Sojasauce", "Frühlingszwiebeln", "Sesamöl"],
        description: "Einfacher Eier-Reis",
        instructions: [
            "Reis vom Vortag verwenden",
            "Eier verquirlen und zu Rührei braten",
            "Reis hinzufügen und anbraten",
            "Erbsen dazugeben",
            "Mit Sojasauce würzen"
        ],
        nutrition: { calories: 380, protein: 14, carbs: 62, fat: 8 }
    },
    {
        id: 110,
        name: "Käsespätzle",
        emoji: "🧀",
        time: 40,
        difficulty: "Mittel",
        price: 4.50,
        servings: 4,
        categories: ["vegetarisch"],
        ingredients: ["Spätzle", "Käse", "Zwiebel", "Butter", "Salz"],
        description: "Schwäbische Spezialität",
        instructions: [
            "Spätzle kochen",
            "Zwiebeln in Ringen goldbraun braten",
            "Spätzle schichtweise mit Käse in Form geben",
            "Im Ofen schmelzen lassen",
            "Mit Röstzwiebeln toppen"
        ],
        nutrition: { calories: 520, protein: 22, carbs: 58, fat: 22 }
    }
];
