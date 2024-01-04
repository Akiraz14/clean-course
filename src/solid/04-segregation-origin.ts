(() => {

    interface Bird {
        fly: () => void;
        eat: () => void;
        run: () => void;
    }

    class Tucan implements Bird {
        public fly() { }
        public eat() { }
        public run() { }
    }

    class Hummingbird implements Bird {
        public fly() { }
        public eat() { }
        public run() { }
    }

    // Sabemos que los avestruces no vuelan
    // Sin embargo, la interfaz nos obliga a implementar el método volar
    // Con esto estaríamos violentando el principio ISP
    class Ostrich implements Bird {
        public fly() {
            throw new Error("Esta ave no vuela");
        }
        public eat() { }
        public run() { }
    }
    
    // Sabemos que los pinguinos no vuelan, pero sí pueden nadar
    // Sin embargo, la interfaz nos obliga a implementar el método volar
    // También tendríamos que agregar otro método Swim en la interfaz Bird para nadar
    // Aquí también estaríamos violentando el principio ISP
    class Penguin implements Bird {
        public fly() {
            throw new Error("Esta ave no vuela");
        }
        public eat() { }
        public run() { }
        public swim() { }
    }

})();