import { assertEquals, assertThrows } from "@std/assert";
import { Bruch } from '../2025-09-29 brüche_mit_deno/bruch_class.ts';
import { random_bruch } from '../2025-10-06 random_bruchtest/random_class.ts';

for (let i = 0; i < 15; i++) {
    const ergebnis = random_bruch.create();
    let summand1 = ergebnis.createaddend();
    let summand2 = ergebnis.suprtract(summand1);

    summand1 = random_bruch.erweitern(summand1);
    summand2 = random_bruch.erweitern(summand2);

    Deno.test(`Test ${i + 1}: ${summand1.toString()} + ${summand2.toString()} = ${ergebnis.toString()}`, () => {
        if (summand1.nenner === 0 || summand2.nenner === 0) {
            assertThrows(
                () => Bruch.fromString("1/0"),
                Error,
                "Nenner darf nicht 0 sein",
            );
            return;
        }
        else {
        const bruch1 = Bruch.fromString(summand1.toString());
        const bruch2 = Bruch.fromString(summand2.toString());
        assertEquals(bruch1.addiere(bruch2).toString(), ergebnis.toString());
        }
    });
}
