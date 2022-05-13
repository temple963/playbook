const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "tepito",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "CDMX",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
   
   console.log(explorers)
   console.log("Ejercicio 2.1")
   explorers.forEach(explorername=>console.log(explorername.name))
   //foreach es un metodo para la realizacion de un recorrido de cada elemento en el listado
    console.log("Ejercicio2.2")
   explorers.forEach(explorerstack=>console.log(explorerstack.stack))

   console.log("Ejercicio 2.3")
   const Mylistmap = explorers.map(item => item.stack)
   console.log(Mylistmap)
   //map crea una lista a partir de lo que tu definas del objeto

   console.log("Ejercicio2.4")
   const FilterJs = explorers.filter(My_filter_js=>My_filter_js.stack.includes("js")) 
   console.log(FilterJs)
   // includes es para incluir el concepto de las listas filter es para filtrar 


   console.log("Ejercicio2.5")
   const first_explorer_cdmx =explorers.find(My_first_find=>My_first_find.city==="CDMX")
   console.log(first_explorer_cdmx)
   // Find es para buscar  en las listas 
   // cuando no hay manda undefined 

   console.log("Ejercicio2.6")
   const SumExcercises = explorers.reduce((acc,MySumExercises)=>acc+MySumExercises.exercises_completed,0)
   //Cuando se utilzia la funcion reduce se utiliza en dos partes un acumulador (acc) y la lista 
   //el valor de acc esel que tu defines al final 
   console.log(SumExcercises)


   console.log ("Ejercicio 2.7")
   const SomeExcercise= explorers.some(my_first_some=>my_first_some.exercises_completed)
   console.log(SomeExcercise)

   console.log("Ejercicio2.8")
   const Everyexercise = explorers.every(my_first_every=>my_first_every.missions.onboarding.isFinished===true)
   console.log(Everyexercise)