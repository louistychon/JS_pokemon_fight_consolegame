class pokemon {
    constructor(nom, niveau, vie, vitesse, type1, type2) {
        this.nom = nom;
        this.niveau = niveau;
        this.vie = vie;
        this.vitesse = vitesse;
        this.type1 = type1;
        this.type2 = type2;
    }
}
class pikachuClass extends pokemon {
    constructor(nom, niveau, vie, vitesse, type1, type2) {
        super(nom, niveau, vie, vitesse, type1, type2)
    }
    fatal_foudre = (pokemonEnnemi) => {
        pokemonEnnemi.vie -= 25;
        console.log(pokemonEnnemi.nom + " perd 25 points de vie. Ses points de vie sont de " + pokemonEnnemi.vie)
    }
    queue_de_fer = (pokemonEnnemi) => {
        pokemonEnnemi.vie -= 10;
        console.log(pokemonEnnemi.nom + " est étourdi, ses points de vie sont de " + pokemonEnnemi.vie)
    }
    charge = (pokemonEnnemi) => {
        pokemonEnnemi.vie -= 5;
        console.log(this.nom + " inflige 5 points de dégats à " + pokemonEnnemi.nom + " Ses points de vie sont de " + pokemonEnnemi.vie)
    }
    quick_attack = (pokemonEnnemi) => {
        pokemonEnnemi.vie -= 15;
        console.log(pokemonEnnemi.nom + " perd 15 points de vie. Ses points de vie sont de " + pokemonEnnemi.vie)
    }
}

class magicarpeClass extends pokemon {
    constructor(nom, niveau, vie, vitesse, type1, type2) {
        super(nom, niveau, vie, vitesse, type1, type2)
    }
    coup_de_queue = (pokemonControle) => {
        pokemonControle.vie -= 24;
        console.log(this.nom +  " lance coup de queue et inflige 24 points de dégats à " + pokemonControle.nom + " a maintenant " + pokemonControle.vie + " points de vie")
    }
    trempette = () => {
        console.log(this.nom + " se baigne et ne fait rien...")
    }
    charge = (pokemonControle) => {
        pokemonControle.vie -= 5;
        console.log(this.nom + " lance charge et inflige 5 points de dégats à " + pokemonControle.nom + "a maintenant " + pokemonControle.vie + " points de vie")
    }
}

let typesPokemon = ["Acier", "Dragon", "Electrique", "Feu", "Insecte", "Plantes", "Psy", "Sol", "Ténèbres", "Combat", "Eau", "Fée", "Glace", "Normal", "Poison", "Roche", "Spectre", "Vol", "Obscur", "inconnu"]

let attaquesPika = ["Fatalfoudre", "Queuedefer", "Charge", "Quickattack"]
let attaquesMagi = ["Coupdequeue", "Trempette", "Charge"]
let pikachu = new pikachuClass("Pikachu", 15, 100, 10, "Normal", "Electrique");
let magicarpe = new magicarpeClass("Magicarpe", 11, 100, 10, "Eau", "Normal");

export {magicarpe, pikachu, attaquesMagi, attaquesPika}
