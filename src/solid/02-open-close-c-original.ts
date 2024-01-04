// Hay que agregar la dependencia de axios ```yarn add axios```
import axios from 'axios';

//{JSON} Placeholder
//Free fake API for testing and prototyping.
//Powered by JSON Server + LowDB. Tested with XV.

export class HttpClient {

    async get(url: string) {
        const { data, status } = await axios.get(url);
        return { data, status };
    }

}