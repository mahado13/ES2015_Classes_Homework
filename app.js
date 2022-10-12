/*
Author: Mahad Osman
Date: Oct 12 2022
Exercise: //OO Challenge!
Reference: 

*/
//OO Challenge!
//Part one!
class makeVehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return "Beep!";
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

//Part two!
class Car extends makeVehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 4;
    }
}

//Part three!
class Motorcycle extends makeVehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 2;
    }
revEngine(){
        return "VROOM!!!"
    }
}

class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(newToy){
        if  (!(newToy instanceof makeVehicle)) {
            return "Only things on wheels are allowed in here!";
        }
        if(this.vehicles.length > this.capacity){
            return "Turn around the garage is full!";
        }else{
         this.vehicles.push(newToy);
            return "New toy added to the collection!";
        }
    }
}