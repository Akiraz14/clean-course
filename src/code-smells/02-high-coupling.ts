(() => {
    // No aplicando el principio de responsabilidad única
    type Gender = 'M' | 'F';

    // Alto Acoplamiento

    // Un cambio como el querer tener el nombre y el apellido por separado
    // y dejar de usar la propiedad name
    // no causaria ningun problema en la clase Person
    // pero si afectaria otras clases que se extiendan de dicha clase.
    class Person {
        constructor(
            // public name: string,
            public firstName: string,
            public lastName: string,
            public gender: Gender,
            public birthdate: Date,
        ) { }
    }

    // El problema del cambio a Person se ve refleajdo en la clase User
    // Esto significa que tiene un acoplamiento alto
    // Al resolver el cambio en la clase User, tambien afectariamos otra clase que se pueda extender de dicha clase.
    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            private lastAccess: Date,
            // name: string,
            firstName: string,
            lastName: string,
            gender: Gender,
            birthdate: Date,
        ) {
            // super(name, gender, birthdate);
            super(firstName, lastName, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    // Aqui nos damos cuenta que UserSettings tambien tiene un alto acoplamiento
    // Por lo tanto debemos implementar cambios para poder seguir usando de manera correcta la extension de la clase User

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastFolderOpen: string,
            email: string,
            role: string,
            // name: string,
            firstName: string,
            lastName: string,
            gender: Gender,
            birthdate: Date,
        ) {
            // super(
            //     email,
            //     role,
            //     new Date(),
            //     name,
            //     gender,
            //     birthdate
            // )
            super(
                email,
                role,
                new Date(),
                // name,
                firstName,
                lastName,
                gender,
                birthdate
            )
        }
    }
    
    // Por ultimo tenemos la creación de la instancia que tambien se vio afectada
    // Debemos cambiar y agregar los parametros nuevos que se crearon
    // Todo esto fue producto de haber cambiado,la clase Person, que afecto a User
    // y que despues afecto la clase UserSettings

    const userSettings = new UserSettings(
        '/urs/home',
        '/development',
        'fernando@google.com',
        'F',
        // 'Fernando',
        'Fernando',
        'Herrera',
        'M',
        new Date('1985-10-21')
    );

    // Ahora que aplicamos todos los cambios, deberiamos poder seguir visualizando nuestro objeto
    // Deberiamos poder ver las nuevas propiedades firstName y lastName y no ver la propiedad que quitamos name
    console.log({ userSettings, credentials: userSettings.checkCredentials() });

    // Estos ajustes, fueron para implementar un cambio relativamente sencillo.
    // Sin embargo durante el ajuste, no resolvimos el problema real que se trata del alto acoplamiento.
    // Por lo cual, otro ajuste puede derivar en otro cambio en muchas partes distintas.
    // Las clases continuan estando altamente acopladas. 
    // Esto abre completamente la puerta a errores por equivocarse en la posición de los parámetros y/o la perdida de información.
    // Tambien es muy dificil generar pruebas
    // Por ejemplo, para los ajustes realizados en los constructores,
    // al tratarse de dos campos de tipo string podemos enviar primero el apellido y leugo el nombre y nuestro codigo esperar todo lo contrario.

})();