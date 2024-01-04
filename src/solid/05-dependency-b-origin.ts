import { LocalDataBaseService } from "./05-dependency-c";

interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}

export class PostService {

    private posts: Post[] = [];

    constructor() { }

    async getPosts() {
        const jsonDB = new LocalDataBaseService();
        this.posts = await jsonDB.getFakePosts();
        // Esto es una dependencia oculta, dado que más haya del import
        // No hay forma de saber que este módulo depende del objeto LocalDataBaseService

        return this.posts;
    }
}