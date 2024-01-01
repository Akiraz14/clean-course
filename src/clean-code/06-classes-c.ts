(() =>{

    // Aplicando el principio de responsabilidad unica.
    // Priorizar la composición frente a la herencia.
    // Es decir, evitar usar extends a menos que sea estrictamente necesario.
    
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

    // const personData: PersonData = { name: "Juan", gender: "M", birthdate: new Date(1992,1,1) };
    // console.log({personData});
    // const juan = new Person(personData);
    // console.log({juan});

    interface UserData {
        email: string,
        role: string,
    }

    class User {
        
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({ email, role }: UserData) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(): boolean {
            return true;
        }

        getLastAccessDate(): Date {
            return this.lastAccess;
        }
    }

    // const userData: UserData = { email: "juan@akiraz.com", role: "admin" };
    // const userJuan = new User(userData);;
    // console.log({userJuan});

    interface SettingsData {
        lastOpenFolder: string,
        workingDirectory: string,
    }

    class Settings {
        public lastOpenFolder: string;
        public workingDirectory: string;
        constructor(
            {
                workingDirectory,
                lastOpenFolder
            }: SettingsData
        ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsData extends PersonData, UserData, SettingsData {
    }
    // interface UserSettingsData {
    //     birthdate: Date
    //     email: string,
    //     gender: Gender,
    //     lastOpenFolder: string,
    //     name: string,
    //     role: string,
    //     workingDirectory: string,
    // }

    class UserSettings {
        
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor(
            {
                name, gender, birthdate,
                email, role,
                lastOpenFolder, workingDirectory,
            }: UserSettingsData
        ) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
        }
    }

    
    const userSettingsData: UserSettingsData = {
        name: "Juan", gender: "M", birthdate: new Date(1992,1,1),
        email: "juan@akiraz.com", role: "admin",
        workingDirectory: "/usr/home", lastOpenFolder: "/home"
    };
    const userSettings = new UserSettings(userSettingsData);
    console.log({ userSettings });
    console.log(userSettings.user.checkCredentials());

})();