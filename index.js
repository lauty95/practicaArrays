function ultimasLetras(str, ultimas) {
    //ultimasLetras('abc', 'bc') // returns true
    //ultimasLetras('abc', 'd') // returns false 
}

function inversionPalabra(string) {
    //inversionPalabra('JavaScript') //returns tpircSavaJ
    //inversionPalabra('hola') //hola
}

function camelCase(str) {
    //camelCase('holaMundo') //returns 'hola Mundo'
}

function encontrarDiferente(array) {
    //encontrarDiferente [1, 1, 1, 2, 1, 1] //returns 2
}

function toWeirdCase(str) {
    //toWeirdCase('Esto es una prueba') //returns EsTo Es UnA PrUeBa
}

function isValidIp(ip) {
    // isValidIp('1.2.3.4') //return true
    // isValidIp('123.45.67.89') //return true
    // isValidIp('123.456.78.90') //return false
    // isValidIp('123.045.067.089') //return false
    // isValidIp('1.2.3') //return false
}

const inversionLetras = (string) => {
    //inversionLetras("JavaScript") //returns tavaScripJ
};

module.exports = {
    ultimasLetras,
    inversionPalabra,
    inversionLetras,
    camelCase,
    encontrarDiferente,
    toWeirdCase,
    isValidIp,
}