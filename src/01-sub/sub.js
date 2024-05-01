function sub(num1,num2){
    if(num1 === undefined || num2 === undefined){
        return "Ah ocurrido un error, no se han recibido argumentos.";
    }
    return num1-num2;
}

module.exports = sub;