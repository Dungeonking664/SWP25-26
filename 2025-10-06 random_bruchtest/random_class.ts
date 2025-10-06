export class random_bruch {
    ganz: number;
    zaehler: number;
    nenner: number;

    constructor(ganz: number, zaeler: number, nenner: number) {
        this.ganz = ganz;
        this.zaehler = zaeler;
        this.nenner = nenner;
    }

    static create(): random_bruch {
    const randomGanz = Math.ceil(Math.random() * 100);
    const randomZähler = Math.ceil(Math.random() * 100);
    const randomNenner = Math.ceil(Math.random() * 100);
    return new random_bruch(randomGanz, randomZähler, randomNenner);
}
    createaddend(): random_bruch {
        const randomGanz = Math.ceil(Math.random() * 100);
        const randomZähler = Math.ceil(Math.random() * 100);
        const Nenner = this.nenner;
        return new random_bruch(randomGanz, randomZähler, Nenner);
    }

    suprtract(other: random_bruch): random_bruch {
        const neuGanz = this.ganz - other.ganz;
        const neuNenner = this.nenner;
        const neuZähler = this.zaehler - other.zaehler;
        return new random_bruch(neuGanz, neuZähler, neuNenner);
    }

    static erweitern(Bruch: random_bruch) {
        const randomFactor = Math.ceil(Math.random() * 10);
        const neuerZähler = Bruch.zaehler * randomFactor;
        const neuerNenner = Bruch.nenner * randomFactor;
        return new random_bruch(Bruch.ganz, neuerZähler, neuerNenner);
    }

    toString(): string {
        return `${this.ganz} ${this.zaehler}/${this.nenner}`;
    }
}