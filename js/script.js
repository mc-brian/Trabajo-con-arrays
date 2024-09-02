// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // 1. Filtrar para sacar del array raro solo los elementos de tipo String
  const stringArray = strangeArray.filter((element) => typeof element === 'string');
  
  // 2. Ordenar el array de strings alfabéticamente, teniendo en cuenta que hay mayúsculas y minúsculas
  const sortedStringArray = stringArray.sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));
  
  // 3. Para mostrar el array que se obtuvo
  showList(sortedStringArray);
});
