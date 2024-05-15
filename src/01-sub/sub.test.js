const sub = require("./sub");

describe("Otros test",()=>{
    test("resta de 10-5 es igual a 5",()=>{
        const result = sub(10,5);
        expect(result).toBe(5);
    })

    test("Resta de 2-3 devuelve el valor absoluto de 1",()=>{
        const result = sub(2,3);
        expect(result).toBe(1);
    })
})

describe("Test de retornos de errores",()=>{
    test("Resta de 2-3 devuelve el valor absoluto de 1",()=>{
        const result = sub("a",3);
        expect(result).toBe("Ah ocurrido un error, no se han recibido argumentos.");
    })
})
