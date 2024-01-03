(() => {
    // Aplicando el principio de responsabilidad única
    // Prioriza la composición frente a la herencia

    // Apliquemos el cambio de querer tener el nombre y el apellido por separado.
    
    type Gender = 'M' | 'F';

    // En esta interfaz tenemos que restringir el uso de name y habilitar el de firstName y lastName
    interface PersonProps {
        // name: string;
        firstName: string,
        lastName: string,
        gender: Gender;
        birthdate: Date;
    }

    // Dado que esta clase no tiene acoplamiento, solo debemos crear las nuevas propiedades que creamos en la interfaz
    class Person {
        // public name: string;
        public firstName: string;
        public lastName: string;
        public gender: Gender;
        public birthdate: Date;

        // constructor({ name, gender, birthdate }: PersonProps) {
        constructor({ firstName, lastName, gender, birthdate }: PersonProps) {
            // this.name = name;
            this.firstName = firstName;
            this.lastName = lastName;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }
    
    // La interfaz y la clase de User no se vieron afectadas al no tener acoplamiento
    interface UserProps {
        email: string;
        role: string;
    }
    class User {

        public email: string;
        public role: string;
        private lastAccess: Date;

        constructor({ email, role }: UserProps) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    // La interfaz y la clase de Settings tampoco se vieron afectadas pues no tienen acoplamiento
    interface SettingsProps {
        lastFolderOpen: string;
        workingDirectory: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastFolderOpen: string;

        constructor({ workingDirectory, lastFolderOpen }: SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastFolderOpen = lastFolderOpen;
        }
    }

    // La interfaz y la clase de UserSettings SI las debemos ajustar pues si tiene acoplamiento con la clase Person

    // Nuevo User Settings
    interface UserSettingsProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastFolderOpen: string;
        // name: string;
        firstName: string,
        lastName: string,
        role: string;
        workingDirectory: string;
    }

    class UserSettings {
        
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            // name, gender, birthdate,
            firstName, lastName, gender, birthdate,
            email, role,
            workingDirectory, lastFolderOpen,
        }: UserSettingsProps) {
            // this.person = new Person({ name, gender, birthdate });
            this.person = new Person({ firstName, lastName, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastFolderOpen })
        }
    }

    // Por ultimo tenemos la creación de la instancia que tambien se vio afectada
    // Debemos cambiar y agregar los parametros nuevos que se crearon

    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastFolderOpen: '/home',
        // name: 'Fernando',
        firstName: 'Fernando',
        lastName: 'Herrera',
        role: 'Admin',
        workingDirectory: '/usr/home'
    });

    console.log({ userSettings, credentials: userSettings.user.checkCredentials() });

    // A diferencia del high-coupling planteado, aqui fueron menos la cantidad de ajustes que tuvimos que realiar.
    // La estructura de las clases y las interfaces tambien ayudaron a la hora de realizar el ajuste, pues se logro de manera sencilla.
    
})();