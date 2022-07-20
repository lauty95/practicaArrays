
# Métodos útiles

## Slice

### Sintaxis
```
arr.slice([inicio [, fin]])
```

`slice(-2)` extrae los dos últimos elementos del array. \
`slice(2,-1)` extrae desde el tercer hasta el penúltimo elemento en la secuencia. \
`slice(1,4)` extrae desde el segundo elemento hasta el cuarto  (los elementos con índices 1, 2,  y 3). \
Si fin es mayor a la longitud del array, slice extrae hasta el final de la secuencia (arr.length).

```javascript
let nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
let masculinos = nombres.slice(1, 3);

// masculinos contiene ['Pedro','Miguel']
```

## Substring

### Sintaxis
```
cadena.substring(indiceA[, indiceB'])
```

`indiceA` Un entero entre 0 y la longitud de la cadena menos 1. \
`indiceB` (opcional) Un entero entre 0 y la longitud de la cadena. \

```javascript
let cualquierCadena = "Mozilla";

// Muestra "Moz"
console.log(cualquierCadena.substring(0,3));
console.log(cualquierCadena.substring(3,0));

// Muestra "lla"
console.log(cualquierCadena.substring(4,7));
console.log(cualquierCadena.substring(7,4));

// Muestra "Mozill"
console.log(cualquierCadena.substring(0,6));
console.log(cualquierCadena.substring(6,0));

// Muestra "Mozilla"
console.log(cualquierCadena.substring(0,7));
console.log(cualquierCadena.substring(0,10));
```

## Split

### Sintaxis
```
cadena.split([separador][,limite])
```

`separador` Especifica el carácter a usar para la separación de la cadena. El separador es tratado como una cadena o como una expresión regular. Si se omite el separador, el array devuelto contendrá un sólo elemento con la cadena completa. \
`limite` Opcional. Entero que especifica un límite sobre el número de divisiones a realizar. El método split() todavía se divide en todas las concordancias del separador, pero divide la matriz devuelta en la cantidad de elementos impuesta por el limite. \

```javascript
let string = "Hola mundo como va?"
string.split('')
//[ 'H', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o', ' ', 'c', 'o', 'm', 'o', ' ', 'v', 'a', '?' ]

string.split(' ')
//[ 'Hola', 'mundo', 'como', 'va?' ]

string.split(' ', 2)
//[ 'Hola', 'mundo']
```

## Split

### Sintaxis
```
arr.join([separator])
```

`separador` Es una cadena usada para separar cada uno de los elementos del arreglo. El separador es convertido a una cadena si es necesario. Si este se omite, los elementos del arreglo son separados con una coma (","). Si el separador es una cadena vacía todos los elementos son unidos sin ningún carácter entre ellos. \

```javascript
var a = ['Viento', 'Lluvia', 'Fuego'];
a.join();      // 'Viento,Lluvia,Fuego'
a.join(', ');  // 'Viento, Lluvia, Fuego'
a.join(' + '); // 'Viento + Lluvia + Fuego'
a.join('');    // 'VientoLluviaFuego'
```

## map

### Sintaxis
```
var nuevo_array = arr.map(function callback(currentValue, index, array) {
    // Elemento devuelto de nuevo_array
})
```

`callback` Función a ejecutar por cada elemento, que recibe tres argumentos: \
`currentValue` El elemento actual del array que se está procesando. \
`index` El índice del elemento actual dentro del array. \
`array` El array sobre el que se llama map. \

```javascript
var numeros= [1, 4, 9];
var raices = numeros.map(Math.sqrt);
// raices tiene [1, 2, 3]
// numeros aún mantiene [1, 4, 9]
```

## forEach

### Sintaxis
```
arr.forEach(function callback(currentValue, index, array) {
    // tu iterador
});
```

`callback` Función a ejecutar por cada elemento, que recibe tres argumentos: \
`currentValue` El elemento actual del array que se está procesando. \
`index` El índice del elemento actual dentro del array. \
`array` El array sobre el que se llama map. \

```javascript
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
// Nótese que se evita el 2° índice ya que no hay ningún elemento en esa posición del array
[2, 5, , 9].forEach(logArrayElements);
// salida:
// a[0] = 2
// a[1] = 5
// a[2] = 9
```

## filter

### Sintaxis
```
var newArray = arr.filter(callback(currentValue[, index[, array]]))
```

`callback` Función que comprueba cada elemento del array para ver si cumple la condición (también llamada predicado).  Retorna true si el elemento la cumple o en caso contrario retornará false. Acepta tres parámetros: \
`currentValue` El elemento actual del array que se está procesando. \
`index` El índice del elemento actual dentro del array. \
`array` El array sobre el que se llama map. \

```javascript
function esSuficientementeGrande(elemento) {
  return elemento > 10;
}
var filtrados = [12, 5, 8, 130, 44].filter(esSuficientementeGrande);
// filtrados es [12, 130, 44]
```

## pop

### Sintaxis
```
arr.pop()
```

El método pop elimina el último elemento de un array y devuelve su valor al método que lo llamó.

```javascript
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'
```

## shift

### Sintaxis
```
arr.shift()
```

El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.

```javascript
var miPescado = ['ángel', 'payaso', 'mandarín', 'cirujano'];

console.log('miPescado antes: ' + miPescado);
// "miPescado antes: ángel,payaso,mandarín,cirujano"

var eliminado = miPescado.shift();

console.log('miPescado después: ' + miPescado);
// "miPescado after: payaso,mandarín,cirujano"

console.log('Elemento eliminado: ' + eliminado);
// "Elemento eliminado: ángel"
```

## unshift

### Sintaxis
```
arr.unshift(elemento1[, ...[, elementoN]])
```

El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

```javascript
var arr = [1, 2];

arr.unshift(0); // resultado de la llamada es 3, la nueva longitud del array
// arr es [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr es [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr es [[-3], -2, -1, 0, 1, 2]
```

## push

### Sintaxis
```
arr.push(element1[, ...[, elementN]])
```

El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

```javascript
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total);  // 4
```

