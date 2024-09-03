// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulcountries = document.createElement ("ul");

for (const country of countries) {
    const licountry = document.createElement("li");
    licountry.textContent = country;
    ulcountries.appendChild(licountry);
}
document.body.appendChild(ulcountries);


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elementsToRemove = document.querySelectorAll('.fn-remove-me');
elementsToRemove.forEach(element => {
    element.remove();
});


// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divToInsert = document.querySelector('div[data-function="printHere"]');
const ulcars = document.createElement("ul");

for (const car of cars) {
    const licar = document.createElement("li");
    licar.textContent = car;
    ulcars.appendChild(licar);
}
divToInsert.appendChild(ulcars);



// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
// const countries = [
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
// ];

const Paises = [
    	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
     	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
     	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
    ];

for (const country of Paises) {
    const divElement = document.createElement('div');
    const h4Element = document.createElement('h4');
    h4Element.textContent = country.title; 
    const imgElement = document.createElement('img');
    imgElement.src = country.imgUrl; 
    
    divElement.appendChild(h4Element);
    divElement.appendChild(imgElement);
    
    document.body.appendChild(divElement);
}



// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.

const button = document.createElement('button');
button.textContent = 'Eliminar último div';

button.addEventListener('click', () => {
    const divs = document.querySelectorAll('body > div'); 
    const lastDiv = divs[divs.length - 1]; 
    if (lastDiv) {
        lastDiv.remove(); 
    }
});
document.body.appendChild(button);


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.


const allDivs = document.querySelectorAll('body > div');
for (const divElement of allDivs) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar este elemento';
    deleteButton.addEventListener('click', () => {
        divElement.remove();
    });
    divElement.appendChild(deleteButton);
};


