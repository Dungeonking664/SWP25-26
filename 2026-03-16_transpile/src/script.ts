import { holeEssen, loescheEssen } from "./essen.ts"; // so ists ideal
import ms from "ms"; // so ist es auch möglich
// import * as essensfunctions from "./essen.ts";  -> neues Objekt mit essensfunctions.holeEssen
// import "./essen.ts"; --> es wird nur das Modul ausgeführt, aber keine Funktionen importiert

type EssenGlobals = typeof globalThis & {
    holeEssen: typeof holeEssen;
    loescheEssen: typeof loescheEssen;
};

const globals = globalThis as EssenGlobals;

globals.holeEssen = holeEssen;
globals.loescheEssen = loescheEssen;

document.getElementById("hole-essen")?.addEventListener("click", holeEssen);
document.getElementById("loesche-essen")?.addEventListener(
    "click",
    loescheEssen,
);

document.getElementById("ms-button")?.addEventListener("click", () => {
    const input = (document.getElementById("ms-input") as HTMLInputElement).value;
    const numberinput =Number(input);
    if (!isNaN(numberinput)) {
        const output = ms(numberinput);
        document.getElementById("ms-output")!.textContent = `${output}`;
        return;
    }
    const output = ms(input);
    document.getElementById("ms-output")!.textContent = `In Millisekunden: ${output}`;
});
