interface Vehicle {
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string;
}

//use only when is to define de structure of atributes of an object
interface Dog {
    id?: number;
    name: string;
    age: number;
    description: string;
}

//The class can define de methods, properties etc
class DogRecord implements Dog {
    id: number;
    name: string;
    age: number;
    description: string;

    constructor({name, age, description, id = 0}: Dog) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }

    //static load(id: number): DogRecord {
        // code to load dog from database
        //return dog;
   //}

    save() {
        // code to save dog to database
    }
}

/*
git clone https://github.com/MicrosoftDocs/mslearn-typescript
cd mslearn-typescript/code/module-05/m05-start
code .
*/