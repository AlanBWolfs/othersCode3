// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "shoePics/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "shoePics/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "shoePics/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "shoePics/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "shoePics/zapato-rojo.jpg"}
]
//Se crea carpeta shoePics para organizar y se corrigen las rutas

//Se modifica getElementsByName por getElementsById
const li = document.getElementById("lista-de-productos")
// Se elimina .
const $i = document.querySelector("input");

// Se modifica nombre de variable a createDiv para mejor legibilidad
for (let i = 0; i < productos.length; i++) {
  var createDiv = document.createElement("div")
  createDiv.classList.add("producto")
  //! Creación de div con clase producto

// Se modifica nombre de variable a newParagraph por legibilidad
  var newParagraph = document.createElement("p")
  // No existe la clase titulo en CSS
  newParagraph.classList.add("titulo")
  newParagraph.textContent = productos[i].nombre
  //! Creación de párrafo con clase titulo que demuestra nombre por producto
  
  //Se cambian '' por "" por consistencia
  var imagen = document.createElement("img");
  imagen.setAttribute("src", productos[i].img);
  //! Creación de elemento img y asignación de ruta de archivo

  createDiv.appendChild(newParagraph)
  createDiv.appendChild(imagen)
  //! Asignación de párrafo e imagen via DOM

  li.appendChild(createDiv)
  //! Se anexan divs a la lista
}

//Se elimina displayProductos(productos)
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var createDiv = document.createElement("div")
    createDiv.classList.add("producto")
  
    var newParagraph = document.createElement("p")
    newParagraph.classList.add("titulo")
    newParagraph.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    createDiv.appendChild(newParagraph)
    createDiv.appendChild(imagen)
  
    li.appendChild(createDiv)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  