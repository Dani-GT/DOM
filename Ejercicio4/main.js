// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

const btn = document.getElementById('btnToClick');
btn.addEventListener('click', function(event) {
    console.log(event);
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focusInput = document.querySelector('input.focus');
focusInput.addEventListener('focus', (event) => {
    console.log('Valor del input en focus:', event.target.value);
});

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const valueInput = document.querySelector('input.value');
valueInput.addEventListener('input', (event) => {
    console.log('Valor del input en input:', event.target.value);
});


// 1.4 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
// que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ulAlbums = document.createElement("ul");

for (const single of albums) {
    const liSingles = document.createElement("li");
    liSingles.textContent = single;
    ulAlbums.appendChild(liSingles);
}

document.body.appendChild(ulAlbums);