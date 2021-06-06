// Exercice d'observation :
// *En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// *Cherche des methodes pour résoudre les énoncés suivants :*


// 1. Récupère avec getElementsByClassName "redPurple" affiche et observe
let a = document.getElementsByClassName("redPurple")
console.log(a);



// 2. Fais la meme chose qu'a l'exercice 1 mais avec un querySelectorAll, observe la différence
let b = document.querySelectorAll(".redPurple")
console.log(b);



// 3. En utilisant querySelectorAll trouve un moyen de ne récupérer que les h1 ayant la class "redPurple"
let c = document.querySelectorAll("h1.redPurple")
console.log(c);



// 4. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li, les éléments p et les éléments span
let d = document.querySelectorAll("li, p, span")
console.log(d);



// 5. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li ayant la class important et les éléments p 
let e = document.querySelectorAll("li.important")
console.log(e);


// 6. Récupère en un seul querySelectorAll uniquement les h1 et les span ayant la class "redPurple"
let f = document.querySelectorAll("h1.redPurple, span.redPurple")
console.log(f);