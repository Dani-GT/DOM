// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const createDiv = document.createElement("div");
console.log(createDiv);


// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divP = document.createElement("div");
const parrafo = document.createElement("p");
parrafo.textContent = "Parrafo dentro de div"
divP.appendChild(parrafo);
document.body.appendChild(divP);
console.log(divP)


// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.

const newDiv = document.createElement("div");
for (let i=1; i<= 6; i++) {
    const newP = document.createElement ("p");
    newP.textContent = "parrafo nuevo";
    newDiv.appendChild(newP);
}
document.body.appendChild(newDiv);
console.log(newDiv)


// 2.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.

const dinamicP = document.createElement("p");
dinamicP.textContent = "Soy dinámico!";
document.body.appendChild(dinamicP);
console.log(dinamicP)



// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const titleh2 = document.querySelector(".fn-insert-here");
titleh2.textContent = "Wubba Lubba dub dub";
console.log(titleh2)


// 2.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ulElement = document.createElement("ul");

for (const app of apps) {
    const liElement = document.createElement ("li");
    liElement.textContent = app;
    ulElement.appendChild(liElement);
}
document.body.appendChild(ulElement);
console.log(ulElement)



// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const elementsToRemove = document.querySelectorAll('.fn-remove-me');
elementsToRemove.forEach(element => {
    element.remove();
});



// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const nuevoP = document.createElement('p');
nuevoP.textContent = '¡Voy en medio!';
const divs = document.querySelectorAll('div');
const secondDiv = divs[1];
const parent = secondDiv.parentNode;
parent.insertBefore(nuevoP, secondDiv);


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here

const newP = document.createElement('p');
newP.textContent = '¡Voy dentro!';
const divsToInsert = document.querySelectorAll('div.fn-insert-here');
divsToInsert.forEach(div => {
    div.appendChild(newP.cloneNode(true));
});
