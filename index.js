//Hero Type
let type = {
    0: ["Warrior", "Sword"],
    1: ["Mage", "Magic"],
    2: ["Monk", "Martial arts"],
    3: ["Ninja", "Shuriken"]
  }

//Hero Action
class heroAction{
  constructor(heroName, heroAge){
    this.heroName = heroName
    this.heroAge = heroAge
  }

  write(){
    for (let index in type){
      let [typeHero, typeAttack] = type[index]
      console.log(`The ${this.heroAge} year old ${typeHero} named ${this.heroName} attacked using ${typeAttack}`)
    }
  }
}

let attack = new heroAction("Karilisun", 20)

attack.write()