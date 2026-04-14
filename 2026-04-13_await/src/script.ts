/// <reference lib="dom" />

const url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/female/123.png";

let pokemonImg: HTMLImageElement | null = null;

async function holePokemon() {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Fehler beim Abrufen des Pokemons: " + response.status);
    }
    const blob = await response.blob();

    if (typeof document !== "undefined") {
        const imgUrl = URL.createObjectURL(blob);
        const img = document.createElement("img");
        img.src = imgUrl;
        document.body.appendChild(img);
        pokemonImg = img;
    } else {
        const arrayBuffer = await blob.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);
        await Deno.writeFile("pokemon.png", uint8Array);
        console.log("Pokemon gespeichert als pokemon.png");
    }
}

function loeschePokemon() {
    if (pokemonImg) {
        pokemonImg.remove();
        pokemonImg = null;
    }
}

function togglePokemon() {
    if (pokemonImg) {
        loeschePokemon();
    } else {
        holePokemon();
    }
}

if (typeof document !== "undefined") {
    const zeigeBtn = document.getElementById("zeige-pokemon") as HTMLButtonElement;
    const loeschBtn = document.getElementById("loesche-pokemon") as HTMLButtonElement;

    zeigeBtn?.addEventListener("click", togglePokemon);
    loeschBtn?.addEventListener("click", togglePokemon);
} else {
    togglePokemon();
}
