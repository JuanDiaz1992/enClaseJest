const sum = require("./sum");

test('add 1 + 2 equal 3', () => {
    const result = sum(1,2);
    expect(result).toBe(3);
});

test("add 10 + 10 to equal 20",()=>{
    const result = sum(10,10);
    expect(result).toBe(20);
});
test("Shoul return error if arguments are not passed",()=>{
    const result = sum();
    expect(result).toBe("Ah ocurrido un error, no se han recibido argumentos.");
});