test("Should compare objects",()=>{
    const person ={
        firtsName: "Jhon",
        lastName:"Doe",
        age:25
    }
    expect(person).not.toEqual({
        firtsName: "Jhon",
        lastName:"Doe",
        age:25
    })
})