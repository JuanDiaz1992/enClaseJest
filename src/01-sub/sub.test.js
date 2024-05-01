const sub = require("./sub");

test("resta de 10-5 es igual a 5",()=>{
    const result = sub(10,5);
    expect(result).toBe(5);
})