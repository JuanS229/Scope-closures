// El block scope es un concepto asociado a las palabras reservadas con las cuales declaramos las variables
    //Este hace referencia a que si llegamos a declarar una variable con const o let dentro de un bloque de codigo, sea el que sea, estas solo tendran alcance dentro de ese mismo bloque de codigo

    //EJEMPLO
    function fruits(){
        if (true){
            var fruit1 = 'Apple'; // Function scope
            let fruit2= 'kiwi'; //block scope
            const fruit3 = 'Banana' //block scope
        }
        console.log(fruit1);
        console.log(fruit2);
        console.log(fruit3);
    }
    fruits();

    //El resultado de fruits(); es :
    /*Apple
VM250:8 Uncaught ReferenceError: fruit2 is not defined
    at fruits (<anonymous>:8:21)
    at <anonymous>:1:1 */
    
    //Esto debido a la anterior explicacion del uso de let y const


        // La forma en que podriamos hacer que los console.log funcionen, es uniendolos dentro del mismo bloque de codigo  en el cual declaramos nuestras variables
            function fruits(){
                if (true){
                    var fruit1 = 'Apple'; // Function scope
                    let fruit2= 'kiwi'; //block scope
                    const fruit3 = 'Banana' //block scope

                    console.log(fruit1);
                    console.log(fruit2);
                    console.log(fruit3);}
            }
            fruits();

            //Resultado:
            /*Apple
            kiwi
            Banana*/