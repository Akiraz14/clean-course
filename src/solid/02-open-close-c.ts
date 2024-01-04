//{JSON} Placeholder
//Free fake API for testing and prototyping.
//Powered by JSON Server + LowDB. Tested with XV.

//En caso de que no podamos usar la dependencia axios
//Al haber refactorizado la clase b, solo debemos refactorizar esta clase
//Permitiendo evidenciar que se cumple los principios SRP y OCP
export class HttpClient {

    async get(url: string) {
        const resp = await fetch(url);
        const data = resp.json();

        return { data, status: resp.status };
    }

}