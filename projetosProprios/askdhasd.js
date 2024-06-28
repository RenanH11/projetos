function aaaaa(){
alert("Iniciando projeto... \n Escreva três número a seguir");
var loop = false;

var realvar1 = prompt("Primeiro número");
if(realvar1 === null){
    alert("Saindo do programa...")
 }else{
var realvar2 = prompt("Segundo número");
if(realvar2 === null){
alert("Saindo do programa...")
 }else{
var realvar3 = prompt("Terceiro número");
if(realvar3 === null){
alert("Saindo do programa...")
 }else{

var num1 = parseInt(realvar1);
var num2 = parseInt(realvar2);
var num3 = parseInt(realvar3);

if(isNaN(realvar1) || isNaN(realvar2) || isNaN(realvar3)){
  alert("É pra colocar um número, buro");
}

var trueresp = prompt("Ok, agora escolha a letra com a função desejada: \n A- Soma \n B- Subtração \n C- Multiplicação \n D- Divisão \n E- Maior \n F- Menor \n G- Média \n H- Sair");

while(loop == false){

var resp = trueresp.toUpperCase();
var req

  
switch(resp){
    case "A":
        req = num1 + num2 + num3;
        alert("A soma dos três números é: " + req);
    break;

    case "B":
        req = num1 - num2 - num3;
        alert("A subtração dos três números é: " + req);
    break;

    case "C":
        req = num1 * num2 * num3;
        alert("A multiplicação dos três números é: " + req);
    break;

    case "D":
        req = num1 / num2 / num3;
        alert("A divisão dos três números é: " + req);
    break;

    case "E":
        req = Math.max(num1, num2, num3);
        alert("O maior número é: " + req);
    break;

    case "F":
        req = Math.min(num1, num2, num3);
        alert("O menor número é: " + req);
    break;
    
    case "G":
        req = (num1 + num2 + num3)/3
        alert("A média dos números é: "+req)
    }
    if(trueresp === "h"){
        loop = true
        alert("Saindo do programa...")
    }else{
        var trueresp = prompt("A- Soma \n B- Subtração \n C- Multiplicação \n D- Divisão \n E- Maior \n F- Menor \n G- Média \n H- Sair");
    }

}}}}
}
