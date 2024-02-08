def calcul = function(x,y)
{
    var pi=3.14
    if x>0;
    return (x+y) * pi;
    else :
    return y*pi;
}

////////////////////////////////////////////////////////////////////////////////
function estNombreParfait(nombre) {
    let sommeDiviseurs = 1;

    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            sommeDiviseurs += i;
            if (i !== nombre / i) {
                sommeDiviseurs += nombre / i;
            }
        }
    }

    return sommeDiviseurs === nombre;
}

function Nombres_parfait(n) {
    for (let i = 2; i < n; i++) {
        if (estNombreParfait(i)) {
            console.log(i);
        }
    }
}
Nombres_parfait(1000);
////////////////////////////////////////////////////////////////////////////////
const chaine1 = "abc";
const chaine2 = "de";
const resultat = [a + b for (a of chaine1) for (b of chaine2)];
console.log(resultat);
////////////////////////////////////////////////////////////////////////////////
let T = [17, 38, 10, 25, 72];
T.sort((a, b) => a - b);
console.log("Tableau trié :", T);

T.push(12);
console.log("Tableau avec l'élément 12 :", T);

T.reverse();
console.log("Tableau renversé :", T);


console.log("Indice de l'élément 17 :", T.indexOf(17));


T.splice(T.indexOf(38), 1);
console.log("Tableau sans l'élément 38 :", T);

console.log("Sous-tableau du 2e au 3e élément :", T.slice(1, 3));

console.log("Sous-tableau du début au 2e élément :", T.slice(0, 2));

console.log("Sous-tableau du 3e élément à la fin :", T.slice(2));
////////////////////////////////////////////////////////////////////////////////
function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const chiffreAleatoire = entierAleatoire(0, 10);
const nombreEssais = 3;
for (let essai = 1; essai <= nombreEssais; essai++) {
    const devine = parseInt(prompt("Devinez le chiffre entre 0 et 10 (essai " + essai + "/" + nombreEssais + ")"));

    if (devine === chiffreAleatoire) {
        alert("Félicitations ! Vous avez deviné le bon chiffre.");
        break;
    } else {
        const essaisRestants = nombreEssais - essai;
        if (essaisRestants > 0) {
            alert("Incorrect. Il vous reste " + essaisRestants + " essai(s).");
        } else {
            alert("Désolé, vous avez épuisé tous vos essais. Le chiffre était " + chiffreAleatoire + ".");
        }
    }
}

