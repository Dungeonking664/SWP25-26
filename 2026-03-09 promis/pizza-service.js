// HÜ3: Promises und Promise-Chaining
// Pizza-Service mit checkOven() → bakePizza() .then()-Kette und .catch()

// 1. checkOven: Prüft ob Ofen bereit ist
function checkOven() {
    return new Promise((resolve, reject) => {
        console.log("🔥 Prüfe Ofen...");
        
        const ovenReady = Math.random() > 0.2; // 80% Chance dass der Ofen bereit ist
        
        setTimeout(() => {
            if (ovenReady) {
                console.log("✅ Ofen ist bereit!");
                resolve({
                    temperature: 250,
                    ready: true
                });
            } else {
                console.log("❌ Ofen ist nicht bereit!");
                reject(new Error("Ofen ist nicht auf die richtige Temperatur erhitzt!"));
            }
        }, 1000);
    });
}

// 2. bakePizza: Backt die Pizza
function bakePizza(ovenStatus) {
    return new Promise((resolve, reject) => {
        if (!ovenStatus.ready) {
            reject(new Error("Ofen nicht bereit - kann nicht backen!"));
            return;
        }
        
        console.log(`🍕 Backe Pizza im Ofen bei ${ovenStatus.temperature}°C...`);
        
        setTimeout(() => {
            console.log("✅ Pizza ist fertig gebacken!");
            resolve({
                pizza: "Margherita",
                bakedAt: ovenStatus.temperature,
                ready: true
            });
        }, 2000);
    });
}

// 3. servePizza: Serviert die Pizza
function servePizza(pizza) {
    return new Promise((resolve) => {
        console.log(`🍽️ Serviere die ${pizza.pizza}-Pizza...`);
        
        setTimeout(() => {
            console.log("🎉 Guten Appetit!");
            resolve({
                served: true,
                pizzaType: pizza.pizza
            });
        }, 500);
    });
}

// Promise-Chain: checkOven() → bakePizza() → servePizza()
console.log("\n=== PIZZA-SERVICE MIT PROMISE-CHAINING ===\n");

checkOven()
    .then((ovenStatus) => {
        console.log("Ofen-Status erhalten, starte backen...\n");
        return bakePizza(ovenStatus);
    })
    .then((pizza) => {
        console.log("Pizza gebacken, serviere...\n");
        return servePizza(pizza);
    })
    .then((result) => {
        console.log("\n✅ Pizza-Service erfolgreich abgeschlossen!");
        console.log(`Serviertort: ${result.pizzaType}\n`);
    })
    .catch((error) => {
        console.error("\n❌ Fehler im Pizza-Service:", error.message);
        console.log("Der Service musste abgebrochen werden.\n");
    });

// Zusätzliches Beispiel: Promise-Chain mit mehreren Attempts
console.log("\n=== ZWEITER VERSUCH MIT DELAY ===\n");

setTimeout(() => {
    checkOven()
        .then((ovenStatus) => bakePizza(ovenStatus))
        .then((pizza) => servePizza(pizza))
        .then((result) => {
            console.log("\n✅ Zweiter Versuch erfolgreich!");
        })
        .catch((error) => {
            console.error("\n❌ Zweiter Versuch fehlgeschlagen:", error.message);
        });
}, 6000);
