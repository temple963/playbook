const Ajolonauta = require("../app/ajolonauta");



describe("Prueba de unidad Ajolonauta",()=>{
    test('Caso de prueba 1 : creacion de un objeto ',()=>{
             
          //aqui tu puedes usar el codigo como lo deseas utilizar       
        const woopa = new Ajolonauta("woopa")

        //validando un resultado 
        expect(woopa.name).toBe("woopa");
       

    });
})
      