(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string
        ) {}
    }

    class InputEvents {
        constructor() {
        }

        setFocus() { console.log("is focused!") };
        getValue() { };
        isActive() { return true };
        removeValue() { };
    }

    //? Idea para la nueva clase InputElement

    class InputElement {
        public html: HtmlElement;
        public attributes: InputAttributes;
        public events: InputEvents;

        constructor(value: string, placeholder: string, id: string) {
            this.html = new HtmlElement(id, "input");
            this.attributes = new InputAttributes(value, placeholder);
            this.events = new InputEvents();
        }
    }

    const nameField = new InputElement("Juan", "Enter first name", "txtName");

    console.log({ nameField });
    nameField.events.setFocus()
    console.log(nameField.events.isActive());

})();