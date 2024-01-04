import { PostService } from './05-dependency-b';
import { LocalDataBaseService, JsonDataBaseService, WebApiPostService } from './05-dependency-c';

// Main
(async () => {

    // Aqui ya tenemos aplicado el prinicio DIP
    // Podemos evidenciarlo dado que no importa que objeto que enviemos,
    // el módulo PostService verífica que sea uno de los objetos esperados
    
    // const postProvider1 = new LocalDataBaseService();
    // const postProvider2 = new JsonDataBaseService();
    const postProvider3 = new WebApiPostService();

    const postService = new PostService(postProvider3);

    const posts = await postService.getPosts();

    console.log({ posts })

})();

// El código de esta forma esta haciendo inyección de dependencias
// Aun no estamos alplicando el principio DIP
/*
import { PostService } from './05-dependency-b';
import { LocalDataBaseService, JsonDataBaseService } from './05-dependency-c';

// Main
(async () => {

    const postProvider = new LocalDataBaseService();
    const postProvider2 = new JsonDataBaseService();
    const postService = new PostService(postProvider);
    const postService2 = new PostService(postProvider2);

    const posts = await postService.getPosts();
    const posts2 = await postService2.getPosts();

    console.log({ posts })

})();
*/