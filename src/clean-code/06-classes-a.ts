(() =>{

    // Este ejemplo no aplica el principio de responsabilidad unica.
    
    type Gender = "F" | "M";

    class Person {

        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) {}
    }

    // const juan = new Person("Juan", "M", new Date(1992,1,1));
    // console.log({juan});

    class User extends Person {
        public lastAccess: Date;
        constructor(
            name: string,
            gender: Gender,
            birthdate: Date,
            public email: string,
            public role: string,
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials(): boolean {
            return true;
        }
    }

    // const firstUser = new User("Juan", "M", new Date(1992,1,1), "juan@akiraz.com", "admin");;
    // console.log({firstUser});

    class UserSettings extends User {
        constructor(
            name: string,
            gender: Gender,
            birthdate: Date,
            email: string,
            role: string,
            public workingDirectory: string,
            public lastOpenFolder: string,
        ) {
            super (name, gender, birthdate, email, role);
        }
    }

    const userSettings = new UserSettings(
        "Juan", "M", new Date(1992,1,1),
        "juan@akiraz.com", "admin",
        "/usr/home", "/home"
    )
    console.log({ userSettings });
    console.log(userSettings.checkCredentials());

})();