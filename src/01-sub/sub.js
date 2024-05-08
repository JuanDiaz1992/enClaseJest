function sub(num1,num2){
    if(num1 === undefined || num2 === undefined){
        return "Ah ocurrido un error, no se han recibido argumentos.";
    }else if(typeof num1 != "number" || typeof num2 != "number"){
        return "Ah ocurrido un error, no se han recibido argumentos.";
    }
    return Math.abs(num1-num2);
}

module.exports = sub;