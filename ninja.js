class Ninja{

    constructor(name){
        this.name=name;
        this.health=50;
        this.speed=3;
        this.strength=3;
    }
    sayName()
    {
        console.log(this.name);
    }
    showStats(){
        console.log(`Name ${ this.name } health ${ this.health } speed ${ this.speed } strength ${ this.strength }`)
    }
    drinkSake(){
        this.health +=10;
        console.log(`health ${this.health}`);
    }
}
const ninja1 = new Ninja('Hyabusa');
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
