(() => {

    interface Bird {
        eat: () => void;
    }
    interface FlyingBird {
        fly: () => number;
    }
    interface SwimmingBird {
        swim: () => void;
    }
    interface RunningBird {
        run: () => void;
    }

    // En este ejemplo estamos creando más interfaces, pero estamos definiendo claramente cada una
    // y por lo tanto, podríamos asignar a las clases solo las interfaces que requieran
    
    class Tucan implements Bird, FlyingBird {
        public fly() { return 200; }
        public eat() { }
    }

    class Hummingbird implements Bird, FlyingBird {
        public fly() { return 50; }
        public eat() { }
    }

    class Ostrich implements Bird, RunningBird {
        public eat() { }
        public run() { }
    }

    class Penguin implements Bird, SwimmingBird {
        public eat() { }
        public swim() { }
    }

})();