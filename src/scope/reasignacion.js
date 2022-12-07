//La reasignacion de calores con variables 

    //Con var: podemos redeclarar y reasignar una variable sin problemas, además de que las variables declaradas con var, no manejan el scope block , entonces si llegasen a ser declaradas dentro de un ciclo o condicional de una función estas podrán ser usadas dentro del scope de la función, pero no el global.

    var animal; //Declaracion
    animal='dog';//Inicializacion
    var animal= 'cat';//Redelcramos y renicializamos
    console.log(animal) //Resultado: cat

    //Con let : Podremos reasignar variables, pero no redeclararlas, además de que estas si tendrán el scope del lugar en que sean declaradas por defecto.

    let fruit= 'apple';
    fruit= 'banana';//Reinicializamos
   /* let fruit = 'kiwi';*/ //NO SE PUEDE REDECLARAR CON let 
   console.log(fruit); // resultado: banana

   //Con const: En este caso, y por como su palabra lo indica esta será de un valor constante, lo que quiere decir que el valor que se asigne en la declaración no podrá ser cambiado, o e pocas palabras después de declarado no se podrá ni redeclarar, ni reasignar la variable.

   const vehicle= 'chevrolet';
   /* const vehicle= 'audi'; */ // No se puede ni redeclarar ni reinicializar las variables declaradas con const
    console.log(vehicle);