// ===== AUFGABE: PIZZA-SERVICE (HAUPTAUFGABE) =====
// SIEHE: pizza-service.js

// ===== ZUSÄTZLICHE ÜBUNG: STRING-VALIDIERUNG =====
// Man soll einen String eingeben und dann soll ein Promise erzeugt werden:
// - wenn der String länger als 6 Zeichen ist → resolven und Vokale zählen
// - wenn der String kürzer ist → rejected werden

function checkString(str) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (str.length < 6) {
                console.log(`❌ String zu kurz (${str.length} Zeichen)`);
                return reject("String zu kurz - mindestens 6 Zeichen erforderlich");
            }
            console.log(`✅ String akzeptiert (${str.length} Zeichen)`);
            return resolve(str);
        }, 500);
    });
}

// Hilfsfunktion: Vokale zählen
function countVowels(str) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let count = 0;
            const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
            
            for (let i = 0; i < str.length; i++) {
                if (vowels.includes(str[i])) {
                    count++;
                }
            }
            
            console.log(`📊 Vokale in "${str}": ${count}`);
            resolve(count);
        }, 300);
    });
}

// ===== PROMISE-CHAIN MIT .then() und .catch() =====

console.log("\n=== TEST 1: String zu kurz ===");
checkString("Hallo")
    .then((r) => countVowels(r))
    .then((count) => {
        console.log(`Ergebnis: ${count} Vokale gezählt\n`);
    })
    .catch((error) => {
        console.error(`❌ Fehler: ${error}\n`);
    });

console.log("=== TEST 2: String lang genug ===");
setTimeout(() => {
    checkString("Das ist ein gutes Beispiel")
        .then((r) => countVowels(r))
        .then((count) => {
            console.log(`Ergebnis: ${count} Vokale gezählt\n`);
        })
        .catch((error) => {
            console.error(`❌ Fehler: ${error}\n`);
        });
}, 2000);

console.log("=== TEST 3: Weiterer langer String ===");
setTimeout(() => {
    checkString("Promises sind wichtig für asynchrone Programmierung")
        .then((r) => countVowels(r))
        .then((count) => {
            console.log(`Ergebnis: ${count} Vokale gezählt\n`);
        })
        .catch((error) => {
            console.error(`❌ Fehler: ${error}\n`);
        });
}, 5000);