// Usualmente, las abstract class son usadas para crear otras clases
// Esto asegura que dichas clases neuvas, tengan las propiedades y metodos requeridos.
export abstract class Vehicle {

    // Forma 1
    // getNumberOfSeats(): number {
    //     throw Error("Method not implemented...");
    // };

    // Forma 2 - Obliga la creación del metodo usando el atributo abstract
    abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle  {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle  {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle  {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Volvo extends Vehicle  {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Ford extends Vehicle  {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}