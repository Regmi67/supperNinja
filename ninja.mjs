/*

Create a Ninja class

add an attribute: name

add an attribute: health

add a attribute: speed - give a default value of 3

add a attribute: strength - give a default value of 3

add a method: sayName() - This should log that Ninja's name to the console

add a method: showStats() - This should show the Ninja's name, strength, speed, and health.

add a method: drinkSake() - This should add +10 Health to the Ninja
*/
class Ninja {
  constructor(name, health = 10, wisdom = 10) {
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
    this.wisdom = 10;
  }
  sayName() {
    console.log(`My name is ${this.name}`);
  }
  showStats() {
    console.log(`Name: ${this.name}`);
    console.log(`Health: ${this.health}`);
    console.log(`Speed: ${this.speed}`);
    console.log(`Strength: ${this.strength}`);
    console.log(`Wisdom: ${this.wisdom}`);

  }
  speakWisdom(){
    console.log(`Wisdom: ${this.wisdom}`);
    return this.drinkSake();
  }
  
  drinkSake() {
    console.log(`${this.name} drink sake.`);
    this.health += 10;
  }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.speakWisdom();
export default Ninja;
