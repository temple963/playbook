    const Superhero = require("../app/Superhero")
    
    describe("Unit test Superhero",()=>{
        test('Case1 : Get a Supehero',()=>{
          
        const  Ironman = new Superhero("Iron Man","Tony Stark","Robert downey Jr")
        expect(Ironman.name).toBe("Iron Man");
        expect(Ironman.actor).toBe("Robert downey Jr");
        expect(Ironman.heroName).toBe("Tony Stark");

    });
})
      