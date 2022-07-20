const {
    ultimasLetras,
    inversionPalabra,
    inversionLetras,
    camelCase,
    encontrarDiferente,
    toWeirdCase,
    isValidIp,
} = require('./../index.js')

describe('ultimasLetras', function () {
    it('ultimasLetras("abc", "bc") debería devolver true', function () {
        expect(ultimasLetras('abc', 'bc')).toBe(true)
    })
    it('ultimasLetras("abc", "d") debería devolver false', function () {
        expect(ultimasLetras('abc', 'd')).toBe(false)
    })
    it('ultimasLetras("abcde", "abc") debería devolver false', function () {
        expect(ultimasLetras('abcde', 'abc')).toBe(false)
    })
})
describe('inversionPalabra', function () {
    it('inversionPalabra("JavaScript") debería devolver tpircSavaJ', function () {
        expect(inversionPalabra('JavaScript')).toBe('tpircSavaJ')
    })
    it('inversionPalabra("Hola") debería devolver Hola', function () {
        expect(inversionPalabra('Hola')).toBe('Hola')
    })
})

describe('inversionLetras', function () {
    it('inversionLetras("JavaScript") debería devolver tavaScripJ', function () {
        expect(inversionLetras('JavaScript')).toBe('tavaScripJ')
    })
    it('inversionLetras("Ada Lovelace fue la única hija legítima de Anna Isabella") debería devolver Ada eovelacL fue la única hija aegítiml de Anna asabellI', function () {
        expect(inversionLetras('Ada Lovelace fue la única hija legítima de Anna Isabella')).toBe('Ada eovelacL fue la única hija aegítiml de Anna asabellI')
    })
})

describe('camelCase', function () {
    it('camelCase("JavaScript") debería devolver "Java Script"', function () {
        expect(camelCase('JavaScript')).toBe('Java Script')
    })
    it('camelCase("nombreCompleto") debería devolver "nombre Completo"', function () {
        expect(camelCase('nombreCompleto')).toBe('nombre Completo')
    })
})

describe('encontrarDiferente', function () {
    let arr = Array(200000).fill(2)
    arr.push(1)
    it('encontrarDiferente([1, 1, 1, 2, 1, 1]) debería devolver 2', function () {
        expect(encontrarDiferente([1, 1, 1, 2, 1, 1])).toBe(2)
    })
    it('encontrarDiferente( array grande ) debería devolver 1', function () {
        expect(encontrarDiferente(arr)).toBe(1)
    })
})

describe('toWeirdCase', function () {
    it('toWeirdCase("This is a test") debería devolver "ThIs Is A TeSt"', function () {
        expect(toWeirdCase("This is a test")).toBe("ThIs Is A TeSt")
    })
    it('toWeirdCase("Los Includes son diVertIDOs") debería devolver "LoS InClUdEs SoN DiVeRtIDOs"', function () {
        expect(toWeirdCase('Los Includes son diVertIDOs')).toBe("LoS InClUdEs SoN DiVeRtIDOs")
    })
})

describe('isValidIp', function () {
    it('isValidIp("123,45,67,89") debería devolver false', function () {
        expect(isValidIp("123,45,67,89")).toBe(false)
    })
    it('isValidIp("123.456.789.0") debería devolver false', function () {
        expect(isValidIp("123.456.789.0")).toBe(false)
    })
    it('isValidIp("137.255.156.100") debería devolver true', function () {
        expect(isValidIp("137.255.156.100")).toBe(true)
    })
    it('isValidIp("137.255.156.100") debería devolver true', function () {
        expect(isValidIp("0.0.0.0")).toBe(true)
    })
})
