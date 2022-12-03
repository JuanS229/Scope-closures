// FUNCTION SCOPE
//Este define que las varables que son DECLARADAS dentro de una funcion solo podran ser ultilizadas en funcionalidades que estan dentro de estas

    //EJEMPLO
    function greeting(){
        let userName= 'Julian';
        console.log(userName);

        if(userName=== 'Julian'){
            console.log(`hola ${userName}`)
        }
    }
    /* El llamado de la funcion greeting deberia retornar:
    Julian
    hola Julian*/
    greeting();
    // Este console.log deberia de retornar un 'Undefined' ya que el scpope de la variable userName es un scope local de solo la funcion greeting
    console.log(userName);