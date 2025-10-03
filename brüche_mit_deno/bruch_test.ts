import { assertEquals, assertThrows } from "@std/assert";
import { Bruch } from "./bruch_class.ts";

Deno.test(function bruch_mitganz(){
  const bruch1 = Bruch.fromString("2 1/2");
  const bruch2 = Bruch.fromString("3 1/3");
  assertEquals(bruch1.addiere(bruch2).toString(), "5 5/6");
});

Deno.test(function bruch_ohneganz(){
  const bruch1 = Bruch.fromString("1/2");
  const bruch2 = Bruch.fromString("1/3");
  assertEquals(bruch1.addiere(bruch2).toString(), "5/6");
});

Deno.test(function nenner0(){
  assertThrows(
    () => Bruch.fromString("1/0"),
    Error,
    "Nenner darf nicht 0 sein",
  );
});
