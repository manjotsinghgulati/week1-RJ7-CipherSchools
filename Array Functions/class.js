class Animal {
    noOflegs;
    color;
    family;
    sound;

    constructor(noOflegs, color, family, sound) {
        this.noOflegs = noOflegs;
        this.color = color;
        this.family = family;
        this.sound = sound;
    }

    showAnimal(){
        console.log(`Animal has ${this.noOflegs} legs, ${this.color} color, belongs to ${this.family} family and makes ${this.sound} sound`);
    }
}

let animal =  new Animal(4, "brown", "rodent", "something");
animal.showAnimal()