//SCOPE 
//Variables
    let a; //Declaramos
    a='a'; //Inicializamos
    let b = 'b'; //Delaramos e inicializamos
    b = 'bb'; // Reinicializamos


//GLOBAL SCOPE
    ///Cuando declaramos una variable fuera de un cloque de codigo esta tendra un alcance  scope GLOBAL
    let fruit = 'Apple';
    function bestFruit(){
        console.log(fruit)
    }

    bestFruit();
    /*Resulatdo :
    Apple*/


    /* En caso de que inicialicemos una variable que no haya sido declarada dentro de un bloque de codigo como una funcion,
    esta pierde el scope local y pasa a tener un scope global*/
    function countries(){
        country = 'Colombia';
        console.log(country)
    }
    /* En caso de que cremos una inicialicemos una variable que no haya sido declarada dentro de un bloque de codigo como una funcion,
    esta pierde el scope local y pasa a tener un scope global*/
    countries()
    console.log(country)

    /* Resultado:
    Colombia
    Colombia*/
    // Esto ya que country due inicializado pero no declarado anteriormente le permite al console.log normal acceder a esta