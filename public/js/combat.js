import {
    attaquesPika,
    attaquesMagi
} from './pokemon.js';

function combat(pokemonControle, pokemonEnnemi) {
    let x;
    let y;
    alert("un pokemon sauvage vous agresse !")
    alert("il s'agit d'un " + pokemonEnnemi.nom)
    //tour 1 
    if (pokemonControle.vitesse > pokemonEnnemi.vitesse) {
        x = prompt("Choisissez une attaque parmi celles-ci : " + attaquesPika)
        switch (x) {
            case "Fatalfoudre":
                pokemonControle.fatal_foudre(pokemonEnnemi);
                break;
            case "Queuedefer":
                pokemonControle.queue_de_fer(pokemonEnnemi);

                break;
            case "Charge":
                pokemonControle.charge(pokemonEnnemi);
                break;
            case "Quickattack":
                pokemonControle.quick_attack(pokemonEnnemi);
                break;
            default:
                alert("ce n'est pas une attaque valide")
                x = prompt("Choisissez une attaque parmi celles-ci : " + attaquesPika)
                break;
        }

    } else {
        y = prompt("Choisissez une attaque parmi celles-ci : " + attaquesMagi)
        switch (y) {
            case "Coupdequeue":
                pokemonEnnemi.coup_de_queue(pokemonControle);
                break;
            case "Trempette":
                pokemonEnnemi.trempette();
                break;
            case "Charge":
                pokemonEnnemi.charge(pokemonControle);
                break;
            default:
                alert("ce n'est pas une attaque valide")
                y = prompt("Choisissez une attaque parmi celles-ci : " + attaquesMagi)
                break;
        }
    }


    //Tour 2 et suite
    while (pokemonControle.vie > 0 && pokemonEnnemi.vie > 0) {
        x = prompt("Choisissez une attaque parmi celles-ci : " + attaquesPika)
        switch (x) {
            case "Fatalfoudre":
                pokemonControle.fatal_foudre(pokemonEnnemi);
                break;
            case "Queuedefer":
                pokemonControle.queue_de_fer(pokemonEnnemi);

                break;
            case "Charge":
                pokemonControle.charge(pokemonEnnemi);
                break;
            case "Quickattack":
                pokemonControle.quick_attack(pokemonEnnemi);
                break;
            default:
                alert("ce n'est pas une attaque valide")
                x = prompt("Choisissez une attaque parmi celles-ci : " + attaquesPika)
                break;
        }
        y = prompt("Choisissez une attaque parmi celles-ci : " + attaquesMagi)
        switch (y) {
            case "Coupdequeue":
                pokemonEnnemi.coup_de_queue(pokemonControle);
                break;
            case "Trempette":
                pokemonEnnemi.trempette();
                break;
            case "Charge":
                pokemonEnnemi.charge(pokemonControle);
                break;
            default:
                alert("ce n'est pas une attaque valide")
                y = prompt("Choisissez une attaque parmi celles-ci : " + attaquesMagi)
                break;
        }
    }

    if (pokemonEnnemi.vie <= 0) {
        alert( pokemonEnnemi.nom + " meurt dans la bataille")
    }
    else if(pokemonControle.vie <= 0){
        alert( pokemonControle.nom + " meurt dans la bataille")
    }

}

export {
    combat
};