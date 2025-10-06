import { Bruch } from "./bruch_class.ts";
const args = Deno.args;


try {
  const bruch1 = Bruch.fromString(args[0]);
  const bruch2 = Bruch.fromString(args[1]);
  const ergebnis = bruch1.addiere(bruch2);
  console.log(`Ergebnis: ${ergebnis.toString()}`);
} catch (error) {
    if (error instanceof Error) {
  console.error("Fehler bei der Verarbeitung der Brüche:", error.message);
    }else {
  console.error("Unbekannter Fehler bei der Verarbeitung der Brüche");
  }
  Deno.exit(1);
}