function ultimasLetras(str, ultimas) {
    //ultimasLetras('abc', 'bc') // returns true
    //ultimasLetras('abc', 'd') // returns false 
    return str.substring(str.length - ultimas.length) === ultimas;
}

function inversionPalabra(string) {
    //inversionPalabra('JavaScript') //returns tpircSavaJ
    //inversionPalabra('hola') //hola
    string = string.split(' ');
    string = string.map((palabra) => {
        if (palabra.length >= 5) {
            palabra = palabra.split('').reverse().join('')
        }
        return palabra;
    });
    return string.join(' ');
}

function camelCase(str) {
    //camelCase('holaMundo') //returns 'hola Mundo'
    str = str.split('')
    str = str.map(letra => {
        if (letra === letra.toUpperCase()) {
            return ' ' + letra
        }
        return letra
    })
    return str.join('').trim()
}

function encontrarDiferente(array) {
    //encontrarDiferente [1, 1, 1, 2, 1, 1] //returns 2
    array = array.filter((item) => array.indexOf(item) === array.lastIndexOf(item));
    return array[0];
}

function toWeirdCase(str) {
    //toWeirdCase('Esto es una prueba') //returns EsTo Es UnA PrUeBa
    str = str.split(' ');
    str = str.map((palabra) => {
        palabra = palabra.split('').map((letra, ix) => {
            if (ix % 2 === 0) {
                return letra.toUpperCase();
            }
            return letra;
        });
        return palabra.join('')
    });
    return str.join(' ');
}

function isValidIp(ip) {
    // isValidIp('1.2.3.4') //return true
    // isValidIp('123.45.67.89') //return true
    // isValidIp('123.456.78.90') //return false
    // isValidIp('123.045.067.089') //return false
    // isValidIp('1.2.3') //return false
    ip = ip.split('.');
    if (ip.length !== 4) return false;
    let ipNumber = ip.map((n) => Number(n));

    ipNumber = ipNumber.filter((item, ix) => {
        if (Number.isNaN(item)) return false;
        if (item.toString().length !== ip[ix].length) return false;
        if (item >= 0 && item < 256) return true;
    });
    if (ipNumber.length !== 4) return false;

    return true;
}

const inversionLetras = (string) => {
    //inversionLetras("JavaScript") //returns tavaScripJ
    string = string.split(' ');
    string = string.map((palabra) => {
        if (palabra.length > 5) {
            let aux = palabra.split('');
            let lastLetter = aux.pop();
            let firstLetter = aux.shift();
            aux.unshift(lastLetter);
            aux.push(firstLetter);
            aux = aux.join('');
            palabra = aux;
        }
        return palabra;
    });
    return string.join(' ');
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