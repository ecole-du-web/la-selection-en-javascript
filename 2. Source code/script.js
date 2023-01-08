/* 
Les méthodes de sélection sont disponibles via l'objet document, mais aussi via tous les objets représentant des éléments. 
*/


// 1 .querySelector()

/* 
Méthode "récente" qui sélectionne un élément facilement, à l'aide de n'importe quel sélecteur, (h1, #main-title, .title, html body h1, etc ...).

Retourne un objet représentant le premier élément trouvé.
*/

const mainTitle = document.querySelector("h1")
// console.log(typeof mainTitle);
// mainTitle.style.backgroundColor = "crimson";



// 2 .querySelectorAll()

/* 
Méthode "récente" permettant de sélectionner plusieurs éléments. 

Retourne une nodelist statique.

Un noeud de DOM peut être du texte, un commentaire, ou encore un élément.

Le fait qu'elle soit statique signifie qu'elle ne réagit pas à des changements ultérieurs sur les éléments qu'elle contient, elle reste toujours la même.
*/

// const listElements = document.querySelectorAll("ul li"); 
// console.log(listElements);

// listElements.forEach(el => el.textContent = "Changed !")

// setTimeout(() => {
//   document.querySelector(".list-item:nth-child(3)").remove()
//   console.log(listElements);
// }, 1000);



// 3 .getElementsByClassName()

/* Retourne une HTMLCollection "live", qui réagit donc aux potentiels changements arrivants aux éléments qu'elle contient. */

const listItems = document.getElementsByClassName("list-item")
// console.log(listItems);

// setTimeout(() => {
//   document.querySelector(".list-item:nth-child(3)").remove()
//   console.log(listItems);
// }, 1000);



// 4 .getElementById()

/* Retourne un objet élément en fonction de son ID passé en argument. */

/* Cette méthode n'est accessible que via l'objet document, pas sur les éléments. */

const title = document.getElementById("main-title");
// console.log(title);



// 5 .getElementsByTagName()

/* 
N'accepte qu'un élément en argument, pas de sélecteur contenant plusieurs éléments.

Retourne une HTMLCollection.
*/

const inputs = document.getElementsByTagName("input");
console.log(inputs["age"]);

