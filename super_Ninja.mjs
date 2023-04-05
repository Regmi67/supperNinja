/*
Extend the Ninja class and create the Sensei class. 
A Sensei should have 200 Health, 10 speed, and 10 strength by default. 
In addition, a Sensei should have a new attribute called wisdom, 
and the default should be 10. Finally, add the speakWisdom() method. 
speakWisdom() should call the drinkSake() method from the Ninja class,
before console.logging a wise message.
*/

import Ninja from "./ninja.mjs";

class Sensei extends Ninja {
  constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
    super(name, health, speed, strength, wisdom);
  }
}

export default Sensei;
