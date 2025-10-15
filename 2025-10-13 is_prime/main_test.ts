import { assertEquals } from "@std/assert";
import { isPrime } from "./main.ts";

const primzahlen = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
const keinePrimzahlen = [1, 4, 6, 8, 9, 10, 12, 14, 15, 16];

for (let i=0; i<primzahlen.length; i++) {
    const p=primzahlen[i];
    Deno.test(`isPrime(${p})`, () => {
        assertEquals(isPrime(p), true);
    });
}

for (let i=0; i<keinePrimzahlen.length; i++) {
    const p=keinePrimzahlen[i];
    Deno.test(`isPrime(${p})`, () => {
        assertEquals(isPrime(p), false);
    });
}

