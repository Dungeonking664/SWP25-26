//man soll einen string eingebn und dann soll ein promis erzeugt werden wenn der string länger als 6 zeichen ist
//dann soll das promis resolven und die selbstlaute sollen gezählt werden.
//Wenn aber der string kürzer ist dann soll es rejected werden

function checkString(str) {
    return new Promise((resolve, reject) => {
        if (str.length < 6) {
            console.log("String zu kurz, rejecten");
            return reject("String zu kurz");
        }
        return resolve(str);
    });
}

checkString("Hallo")
    .then((r) => {
        let count = 0;
        for (let i = 0; i < r.length; i++) {
            if (r[i] === "a" || r[i] === "e" || r[i] === "i" || r[i] === "o" || r[i] === "u") {
                count++;
            }
        }
        console.log("Anzahl der Vokale:", count);
    })
    .catch((error) => {
        console.error("Fehler:", error);
    });

checkString("Das ist ein gutes Beispiel")
    .then((r) => {
        let count = 0;
        for (let i = 0; i < r.length; i++) {
            if (r[i] === "a" || r[i] === "e" || r[i] === "i" || r[i] === "o" || r[i] === "u") {
                count++;
            }
        }
        console.log("Anzahl der Vokale:", count);
    })
    .catch((error) => {
        console.error("Fehler:", error);
    });