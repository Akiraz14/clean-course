import { Post, PostProvider } from "./05-dependency-c";

export class PostService {

    private posts: Post[] = [];

    constructor(private postProvider: PostProvider) { }

    async getPosts() {
        this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}

// El código de esta forma esta haciendo inyección de dependencias
// Aun no estamos alplicando el principio DIP
/*
import { LocalDataBaseService, JsonDataBaseService } from "./05-dependency-c";

export interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}

export class PostService {

    private posts: Post[] = [];

    constructor(private postProvider: JsonDataBaseService | LocalDataBaseService) { }

    async getPosts() {
        this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}
*/