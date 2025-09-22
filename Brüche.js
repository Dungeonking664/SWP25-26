 class Bruch  {
    constructor(ganzeZahl, zaehler, nenner) {
        this.ganzeZahl = ganzeZahl;
        this.zaehler = zaehler;
        this.nenner = nenner;
    }
    
static string_to_bruch(s) {
    let leerzeichensplit = s.split(" ");
    let bruchObj;
    if (leerzeichensplit.length == 2) {
        let slashsplit = leerzeichensplit[1].split("/");
        bruchObj = new Bruch(
            Number(leerzeichensplit[0]),
            Number(slashsplit[0]),
            Number(slashsplit[1])
        );
    } else if (leerzeichensplit.length == 1) {
        let bruchsplit = leerzeichensplit[0].split("/");
        if (bruchsplit.length == 2) {
            bruchObj = new Bruch(0, Number(bruchsplit[0]), Number(bruchsplit[1]));
        } else {
            bruchObj = new Bruch(Number(s), 0, 1);
        }
    }
    
    if (bruchObj.nenner === 0) {
        throw new Error("Nenner darf nicht 0 sein");
    }
    if (
        isNaN(bruchObj.ganzeZahl) ||
        isNaN(bruchObj.zaehler) ||
        isNaN(bruchObj.nenner)
    ) {
        throw new Error("Ungültige Eingabe");
    }
    return bruchObj;
}

 add_brueche(b2)
{    
    let ganzeZahl = this.ganzeZahl + b2.ganzeZahl;
    let zaehler =this.zaehler * b2.nenner + b2.zaehler * this.nenner;
    let nenner = this.nenner * b2.nenner;
    return new Bruch(ganzeZahl, zaehler, nenner);
}

kuerzen() 
{
    let ggT = 1;
    let min = Math.min(this.zaehler, this.nenner);
    for (let i = 1; i <= min; i++) 
    {
    if (this.zaehler % i == 0 && this.nenner % i == 0) 
    {
        ggT = i;
    }
    }
    this.zaehler = this.zaehler / ggT;
    this.nenner = this.nenner / ggT;
    if(this.zaehler > this.nenner)
    {
        this.ganzeZahl += Math.floor(this.zaehler/this.nenner);
        this.zaehler -= Math.floor(this.zaehler/this.nenner) * this.nenner;
    }
    return this;
}
    anzeigen() {
        console.log(
            "Ergebnis gekürzt: " +
                this.ganzeZahl +
                " " +
                this.zaehler +
                "/" +
                this.nenner
        );
    }
}

const args = process.argv.slice(2);
let input1 = args[0] || "3 1/4";
let input2 = args[1] || "2 2/3";

try {
    let b1 = Bruch.string_to_bruch(input1);
    let b2 = Bruch.string_to_bruch(input2);

    let ergebnis = b1.add_brueche(b2).kuerzen();
    ergebnis.anzeigen();
} catch (err) {
    console.error("Fehler bei der Eingabe:", err.message);
    process.exit(1);
}