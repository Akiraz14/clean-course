(() => {

    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    const redFruits = ["manzana", "cereza", "ciruela"];
    function isRedFruit(fruit: string): boolean {

        return (redFruits.includes(fruit.toLowerCase())) ? true : false;
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    const yellowFruits = ["piña", "banana"];
    const pupleFruits = ["moras", "uvas"];
    // Una solucion es crear los tipos con los valores requeridos
    type FruitColor = "red" | "yellow" | "purple";
    function getFruitsByColor(color: FruitColor): string[] {
        const fruitsByColor = {
            red: redFruits,
            yellow: yellowFruits,
            purple: pupleFruits,
        }

        if (!Object.keys(fruitsByColor).includes(color)) {
            throw Error('the color must be: red, yellow, purple');
        }

        return fruitsByColor[color];
    }
    // Otra forma de solucionar es con un switch
    function getFruitsByColor2(color: string): string[] {
        switch (color) {
            case "red":
                return redFruits;
            case "yellow":
                return yellowFruits;
            case "purple":
                return pupleFruits;
            default:
                throw Error('the color must be: red, yellow, purple');
        }
    }

    // Simplificar esta función
    let steps = {
        isFirstWorking: true,
        isSecondWorking: true,
        isThirdWorking: true,
        isFourthWorking: true,
    }

    function workingSteps() {

        if (!steps.isFirstWorking) return "First step broken.";
        if (!steps.isSecondWorking) return "Second step broken.";
        if (!steps.isThirdWorking) return "Third step broken.";
        if (!steps.isFourthWorking) return "Fourth step broken.";

        return "Working properly!";
    }

    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
    steps.isFourthWorking = false;
    console.log({ workingSteps: workingSteps() }); // Fourth step broken.
    steps.isFirstWorking = false;
    console.log({ workingSteps: workingSteps() }); // Frist step broken.

})();