const b1 = "3 3/4";
const b2 = "7";
const b3 = "3/4";
const b4 = "5 6/5";


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
        }
    }
    
    console.log(bruch);
    return bruch;
}

let bruchstring1 = string_to_bruch(b1);
let bruchstring4 = string_to_bruch(b4)
string_to_bruch(b2);
string_to_bruch(b3);


function add_brueche (b1, b2)
{
    let ergebnis = {};
    ergebnis.ganzeZahl = b1.ganzeZahl + b2.ganzeZahl;
    ergebnis.zaehler = b1.zaehler * b2.nenner + b2.zaehler * b1.nenner;
    ergebnis.nenner = b1.nenner * b2.nenner
    console.log(ergebnis);
    return ergebnis;

}