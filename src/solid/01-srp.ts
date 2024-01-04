(() => {

    interface Product {
        id: number;
        name: string;
    }

    class ProductService {
        getProduct(id: number): Product {
            let product: Product = { id, name: 'OLED Tv' }
            console.log('Producto: ', product);
            return product;
        }
        saveProduct(product: Product): boolean {
            console.log('Guardando en base de datos', product);
            return true;
        }
    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private producService: ProductService;
        private mailman: Mailman;

        constructor(productService: ProductService, mailman: Mailman) {
            this.producService = productService;
            this.mailman = mailman;
        }

        loadProduct(id: number) {
            this.producService.getProduct(id);
        }

        saveProduct(product: Product) {
            this.producService.saveProduct(product);
        }

        notifyClients() {
            this.mailman.sendEmail(["client1@google.com"], "to-clients");
        }


    }

    class Mailman {
        private fromEmail: string = "company@google.com";

        sendEmail(emails: string[], template: "to-clients" | "to-users") {
            console.log('Enviando correo a los clientes', emails, template);
        }
    }

    class CartBloc {
        private products: Product[];
        constructor() {
            this.products = new Array<Product>();
        }
        addToCart(productId: number) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId);
        }
    }

    const producService = new ProductService();
    const mailman = new Mailman();

    const productBloc = new ProductBloc(producService, mailman);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);

})();