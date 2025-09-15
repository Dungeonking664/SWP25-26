const args = process.argv.slice(2);
let input1 = args[0];
let input2 = args[1];

function string_to_bruch (s)
{
    let bruch = {};
    
    let leerzeichensplit = s.split (" ");

    if(leerzeichensplit.length == 2 )
    {
        
       let slashsplit =  leerzeichensplit[1].split ("/");

        bruch.ganzeZahl = Number(leerzeichensplit[0]);
        bruch.zaehler = Number(slashsplit[0]);
        bruch.nenner = Number(slashsplit[1]);
    }

    else if(leerzeichensplit.length == 1)
    {
        let bruchsplit = leerzeichensplit[0].split("/");

        if(bruchsplit.length == 2 )
        {
        bruch.zaehler = Number(bruchsplit[0]);
        bruch.nenner = Number(bruchsplit[1]); 
        }
        else
        {
            bruch.ganzeZahl = Number(s);
            bruch.zaehler = 0;
            bruch.nenner = 1;
        }
    }
    return bruch;
}
function add_brueche (b1, b2)
{
    let ergebnis = {};
    ergebnis.ganzeZahl = b1.ganzeZahl + b2.ganzeZahl;
    ergebnis.zaehler = b1.zaehler * b2.nenner + b2.zaehler * b1.nenner;
    ergebnis.nenner = b1.nenner * b2.nenner
    return ergebnis;

}
function bruch_kuerzen (b)
{
    let ggT = 1;
    let min = Math.min(b.zaehler, b.nenner);    
    for(let i = 1; i <= min; i++)
    {
        if(b.zaehler % i == 0 && b.nenner % i == 0)
        {
            ggT = i;
        }
    }
    b.zaehler = b.zaehler / ggT;
    b.nenner = b.nenner / ggT;
    return b;
}

let bruchstring1 = string_to_bruch(input1);
let bruchstring2 = string_to_bruch(input2);

let ergebnis1 = add_brueche(bruchstring1, bruchstring2);
let ergebnis2 = bruch_kuerzen(ergebnis1);

console.log("Ergebnis gekürzt:"+ ergebnis2.ganzeZahl + " " + ergebnis2.zaehler + "/" + ergebnis2.nenner);



