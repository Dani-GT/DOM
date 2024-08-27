// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const button = document.querySelector(".showme");
console.log(button)

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const title = document.querySelector("#pillado")
console.log(title)

// 1.3 Usa querySelector para mostrar por consola todos los p

const showp = document.querySelectorAll("p")
showp.forEach(p => {
    console.log(p);
})

// 1.4 Usa querySelector para mostrar por consola todos los elementos con 
// 	la clase.pokemon

const pokemons = document.querySelectorAll(".pokemon");
pokemons.forEach(pokemon => {
    console.log(pokemon);
})

// 1.5 Usa querySelector para mostrar por consola todos los elementos con 
// el atributo data-function="testMe".

const testMeElements = document.querySelectorAll('[data-function="testMe"]');
testMeElements.forEach(element => {
    console.log(element);
});


// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".

console.log(testMeElements[2]);