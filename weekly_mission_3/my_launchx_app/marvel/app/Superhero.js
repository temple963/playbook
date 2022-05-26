class Supehero{


    constructor(name,heroName,actor){
        this.name=name
        this.heroName=heroName
        this.actor=actor
    }
    
    getInfo(){
        return `Hey, I'm ${this.actor} from ${this.studio} studio`
      }
    }
    



module.exports = Supehero