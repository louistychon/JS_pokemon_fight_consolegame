function random(tableau) {
    let z = tableau[Math.floor(Math.random()*tableau.length)];
    return z 
}

let xx = [1, 2, 3, 4, 5]

console.log(random(xx));

export {random}
