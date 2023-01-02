//Conversion: chiffres romains en nombres:

//Valeurs de chaque nombre romain dans un objet:
let chiffresRomains = {
    I: 1,
    V: 5,   
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

//Fonction de convertion:
function convertion(Nbre){

    //Somme initialiser à 0:
    let somme = 0;

    //Boucle parcourant le nombre en chiffre romain:
    for(let index = 0; index < Nbre.length; index++){

        //Condition: si le nombre sur lequel on se trouve est inférieur au nombre suivant alors on effectue une soustraction:
        if(chiffresRomains[Nbre[index]] < chiffresRomains[Nbre[index + 1]]){
            somme -= chiffresRomains[Nbre[index]]
        }
        //Dans le cas contraire, on effectue une addition: 
        else{somme += chiffresRomains[Nbre[index]]}
    };
    //Retourne la valeur convertit:
    return somme
};

console.log(convertion(""));