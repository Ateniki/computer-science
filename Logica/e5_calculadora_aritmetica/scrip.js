var resultado = 0
var numero1 = prompt("Ingresa primer número")
var numero2 = prompt("Ingresa segundo número")
var operacion = prompt("Ingrese símbolo de operación a realizar")

numero1 = parseInt(numero1)
numero2 = parseInt(numero2)

/*
if (operacion === "+"){
    resultado = numero1 + numero2
} else if (operacion === "-"){
    resultado = numero1 - numero2
}else if (operacion === "*"){
    resultado = numero1 * numero2
}else if (operacion === "/"){
    resultado = numero1 / numero2
}else {
    console.log("ingresaste un valor incorrecto")
}
*/


switch(operacion){
    case '+':
        resultado = numero1 + numero2
    break
    case '-':
        resultado = numero1 - numero2
    break
    case '*':
        resultado = numero1 * numero2
    break
    case '/':
        resultado = numero1 / numero2
    break
    default:
        console.log "Ingreaste un valor incorrecto"
    break
}


console.log ("resultado:", resultado)