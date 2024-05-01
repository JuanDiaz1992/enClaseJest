function sum(sum1,sum2){
    if (sum1 === undefined || sum2 === undefined) {
        return "Ah ocurrido un error, no se han recibido argumentos.";
    }
    return sum1+sum2;
}
module.exports = sum;