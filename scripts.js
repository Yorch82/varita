//1. Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

document.querySelector("html").addEventListener("click", function(event){
    event.preventDefault()
  });

//   2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.

let img = document.getElementsByTagName('img');
for (let i = 0; i < img.length; i++){
    img[i].addEventListener("click", () => {img[i].setAttribute("src", "./assets/magic-1.gif")})
}

// 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

let parrafo = document.getElementsByTagName('p');
for (let i = 0; i < parrafo.length; i++){
    parrafo[i].addEventListener("click", () =>{parrafo[i].style.color = '#EEF2F6'} )
}
for (let i = 0; i < parrafo.length; i++){
    parrafo[i].addEventListener("click", () =>{parrafo[i].style.background = '#65AFFF'} )
}

// 2.3 Bloques de article o section: Cambia el color de fondo.

let articulo = document.getElementsByTagName('article');

for (let i = 0; i < articulo.length; i++){
    articulo[i].addEventListener("click", () =>{articulo[i].style.background = '#F374AE'} )
}


// 3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.


let imagen = document.getElementsByTagName('img');
let array=[];
for ( let i=0; i<imagen.length; i++ ){
    array.push(imagen[i].src)
}
for (let i = 0; i < imagen.length; i++){    
    imagen[i].addEventListener("mouseover", () => {imagen[i].setAttribute("src", "./assets/abracadabra.gif")})    
}
for (let i = 0; i < imagen.length; i++){
    imagen[i].addEventListener("mouseout", () => {imagen[i].setAttribute("src", array[i])})    
}

// 3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

for (let i = 0; i < parrafo.length; i++){
    parrafo[i].addEventListener("mouseover", () =>{parrafo[i].style.color = '#D62828'} )
}
for (let i = 0; i < parrafo.length; i++){
    parrafo[i].addEventListener("mouseover", () =>{parrafo[i].style.background = '#003049'} )
}

for (let i = 0; i < parrafo.length; i++){
    parrafo[i].addEventListener("mouseout", () =>{parrafo[i].style.color = '#000000'} )
}
for (let i = 0; i < parrafo.length; i++){
    parrafo[i].addEventListener("mouseout", () =>{parrafo[i].style.background = '#fff'} )
}

// 3.3 Bloques de article o section: Color de fondo distinto al de párrafo.

for (let i = 0; i < articulo.length; i++){
    articulo[i].addEventListener("mouseover", () =>{articulo[i].style.background = '#32533D'} )
}
for (let i = 0; i < articulo.length; i++){
    articulo[i].addEventListener("mouseout", () =>{articulo[i].style.background = '#fff'} )
}

// 4.Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.
// 5. Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas escogido de coolors.co en los apartados anteriores.
// 6. Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.

const colors = ['red', 'blue', 'green']
const myColors = ['#F46036','#5B85AA','#414770','#372248','#171123'];
const gif = ['./asset/magic-1.gif', './asset/magic-2.gif', './asset/magic-3.gif', './asset/magic-4.gif', './asset/magic-5.gif', './asset/magic-6.gif']

const getRandom = (array) => {
    const colorAaleatorio = array[Math.floor(Math.random() * array.length)];
    return colorAaleatorio;
}

console.log(getRandom(colors))
console.log(getRandom(myColors))
console.log(getRandom(gif))

