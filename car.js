class Vehicle{
    constructor(a,b,c){
        this.make=a;
        this.model=b;
        this.year=c;
    }

    honk(){
        return('beep')
    }
    toString(){
        return(`This vehicle is a ${this.make} ${this.model} from ${this.year}`)
    }
}

class Car extends Vehicle{
    constructor(a,b,c){
        
        super(a,b,c)
        this.numWheels =4;
    }
  
}

class Motorcycle extends Vehicle{
    constructor(a,b,c){
        
        super(a,b,c)
        this.numWheels =2;
    }
  revEngine(){
    return('Vroom!!!')
  }
}
``

class Garage{
    constructor(a){
        this.capacity =a;
        this.vehicles=[]
    }
    add(type){

         if(type.constructor.name != 'Car' && type.constructor.name != 'Motorcycle'){
            return ('Only Vehicles allowed in here!')
           }
        else if (this.vehicles.length > (this.capacity - 1)){
        return('sorry garage full')
       }
       
       else{
        this.vehicles.push(type);
        console.log(type instanceof Vehicle)
        return ('vehicle added!')
    }
   }
}