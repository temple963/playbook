//ejemplo 1 :For each para imprimir elementos de una lista 
const numbers =[1,2,3,4,5]
console.log("EJ1: Imprimiendo elementos de una lsita")
numbers.forEach(num=> console.log(num))

//Ejemplo 2 : for each para calcular la suma de todos los elementos de una lista 
let sum = 0;
const numbers2 = [1,2,3,4,5];
numbers2.forEach(num=>sum += num)
console.log("EJ2: calculando la suma de una lista")
console.log(sum)

//Ejemplo 3: forEach para imprimir los paises een letras mayusculas
const countries =['Finland','Denmark','Sweden','Norway','Iceland']
console.log("EJ3: Imprimiendo la lista de paises en mayusculas")
countries.forEach((element=> console.log(element.toUpperCase())))

//Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva 
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index)=> element);
*/

const numbers4 = [1,2,3,4,5]
const numbersSquare=numbers4.map(function(num){
    return num * num
})

console.log("EJ4: imprimiendo la lista de elementos al cuadrado")
console.log(numbersSquare)
console.log(numbers4)

//Ejemplo 5: uso de map para convertir todos los  nombres de una lsita a minusculas 
const names = ['Juanito','Matias','Jose','Jael']
const namesToLowercase=names.map((name)=>name.toLowerCase())
console.log("Ej5: Convirtiendo todo en minusculas")
console.log(namesToLowercase)

//Ejemplo 6 Uso de map para convertir todos los nombres amayuscuas 
const countries6=['Finland','Denmark','Sweden','Norway','Iceland']
const countriesFirstThreeLetters = countries6.map((country)=>
country.toUpperCase().slice(0,3))
//el metodo slice obtiene solo la longitud marcada del string
console.log("Ej6: uso de map para convertir ciertos caracteres en mayusculas")
console.log(countriesFirstThreeLetters)

//Ejemplo 7:  Uso de filter para filtarr una lista de elementos 
const countries7 = ['Finland','Denmark','Sweden','Norway','Iceland']
const countriesContainingLand=countries7.filter((country)=>//esta es una funcion flecha 
country.includes('land')//indicacion para solo filtrar elemetos que incluyan "land"
 )

 console.log("Ej7: Paises que terminan en land")
 console.log(countriesContainingLand)

 const countriesEndsByia = countries7.filter((country)=>country.endsWith('k'))
 console.log("Ej7:Paises que terminancon ia")
 console.log(countriesEndsByia)//si no aparece ninguno es porque no hay
 console.log(countriesEndsByia.length)//para saber cuantos hay


 //Ejemplo 8:Filtrar una lista por condicional 
 const scores =[
     {name:'A', score: 95},
     {name:'L',score:98},
     {name: 'M', Score:80},
     {name:'E',score:50},
    {name: 'M', score:85},
    {name:'J',score :100},
 ]
