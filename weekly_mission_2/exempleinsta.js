console.log("P00")
// objeto de js
const woopa_obj={
    name: "Woopa",
    mission: "Node JS",
    age: "12",
    color: "pink"
}
/*
1. Como crear una clase
2. Como instanciar un objeto de una clase
3. Instanciar varios objetos de una misma clase
4. Como agregar el čonstructor para guardar atrributos del objeto de la classe
5. Crear Metodos
*/

class Ajolonauta{

    constructor(name,mission,age,color){
        this.name=name
        this.mission=mission
        this.age=age
        this.color=color
    }
    sayhello(){
        return `This is my object name: ${this.name}`
        
    }
}

class pokemon{
    constructor(name){
        this.name=name
    }

}

//objeto de JS
const woppa_obj_js = {} 
console.log(woppa_obj_js)

console.log(Ajolonauta)

const woopa =new Ajolonauta("woopa","Node JS", 18, "Pink")// instanciar un objeto

console.log(woopa)
console.log(woopa.sayhello())
const wooper = new Ajolonauta("wooper", "java", 22, "blue")
console.log(wooper)
console.log(wooper.sayhello())



