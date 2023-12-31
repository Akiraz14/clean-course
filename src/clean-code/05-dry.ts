type Size = "" | "S" | "M" | "L" | "XL";

class Product {
    constructor(
        public name: string = "",
        public price: number = 0,
        public size: Size = "",
    ) {
        
    }

    isProductReady(): boolean {
        // Esta forma tiene mucho codigo repetido, por lo tanto no es una buena manera de hacer las validaciones
        // if (this.name.length <= 0) throw Error("name is empty.");
        // if (this.price <= 0) throw Error("price is empty.");
        // if (this.size.length <= 0) throw Error("size is empty.");

        // Forma alternativa de hacer validaciones
        for(const key in this) {
            switch(typeof this[key]) {
                case "string":
                    if ((<string>this[key]).length <= 0) throw Error(`${key} is empty.`);
                    break;
                case "number":
                    if ((<number>this[key]) <= 0) throw Error(`${key} must be greater than 0.`);
                    break;
                default:
                    throw Error(`The property ${key} has not a valid type.`);
            }
        }

        return true;
    }

    toString(): string {

        if (!this.isProductReady()) return "";

        return `${this.name} (${this.price}), ${this.size}`;
    }
}

(() => {
    const bluePants = new Product("Blue large pants",10,"M");
    console.log(bluePants.toString());
    
    // Error: price must be greater than 0.
    // const whitePants = new Product("White short pants");
    // console.log(whitePants.toString());

})();