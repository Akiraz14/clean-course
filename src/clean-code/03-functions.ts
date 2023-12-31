(() => {

    // función para obtener información de una película por Id
    function getMovieInfo( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieActors( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBio( actorId: string ) {
        console.log({ actorId });
    }
    
    // Crear una película
    type Movie = {
        title: string, 
        description: string, 
        rating: number, 
        cast: string[],
    }
    function createMovie({ title, description, rating, cast }: Movie  ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    type Actor = {
        fullName: string, 
        birthdate: Date
    }
    function checkActorName(fullName: string): boolean {
        if (fullName === 'Juan')
            return true;

        return false;
    }
    function createActor({ fullName, birthdate }: Actor ): boolean {
        
        // tarea para verificar nombre
        if (checkActorName(fullName)) return false;
        
        if (!birthdate) return false;

        console.log('Crear actor');
        return true;
    }

    //Funcion complicada
    type PersonStatus = {
        isDead: boolean,
        isSeparated: boolean,
        isRetired: boolean
    }
    // { isDead = false, isSeparated = true, isRetired = false }
    const getPayAmount = ({ isDead, isSeparated, isRetired }:PersonStatus):number => {
        if ( isDead ) return 1500;
        
        if ( isSeparated ) return 2500;
        
        return (isRetired) ? 3000 : 4000;
    }
    
})();