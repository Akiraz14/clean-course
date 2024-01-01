(() =>{

    // Este ejemplo aun sigue sin aplicar el principio de responsabilidad unica.
    
    type Gender = "F" | "M";

    interface PersonData {
        birthdate: Date
        gender: Gender,
        name: string,
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;
        constructor({ name, gender, birthdate }: PersonData) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    const personData: PersonData = { name: "Juan", gender: "M", birthdate: new Date(1992,1,1) };
    console.log({personData});
    const juan = new Person(personData);
    console.log({juan});

    interface UserData extends PersonData {
        email: string,
        role: string,
    }

    class User extends Person {
        public email: string;
        public lastAccess: Date;
        public role: string;
        constructor({ name, gender, birthdate, email, role }: UserData) {
            super({name, gender, birthdate});
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials(): boolean {
            return true;
        }

        getLastAccessDate(): Date {
            return this.lastAccess;
        }
    }
    
    const userData: UserData = {name: "Juan", gender: "M", birthdate: new Date(1992,1,1), email: "juan@akiraz.com", role: "admin"};
    const userJuan = new User(userData);;
    console.log({userJuan});

    interface UserSettingsData extends UserData {
        lastOpenFolder: string,
        workingDirectory: string,
    }

    class UserSettings extends User {
        public lastOpenFolder: string;
        public workingDirectory: string;
        constructor(
            {
                name,
                gender,
                birthdate,
                email,
                role,
                workingDirectory,
                lastOpenFolder
            }: UserSettingsData
        ) {
            super({ name, gender, birthdate, email, role });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettingsData: UserSettingsData = {
        name: "Juan", gender: "M", birthdate: new Date(1992,1,1),
        email: "juan@akiraz.com", role: "admin",
        workingDirectory: "/usr/home", lastOpenFolder: "/home"
    };
    const userSettings = new UserSettings(userSettingsData);
    console.log({ userSettings });
    console.log(userSettings.checkCredentials());

})();