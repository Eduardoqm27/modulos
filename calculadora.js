var somar = require("./modulos/somar");
var media = require("./modulos/media");
var divisao = require("./modulos/divisao");
var subtrair = require("./modulos/subtrair");
var multiplicacao = require("./modulos/multiplicacao");
var mensagem = require("./modulos/mensagem");
var nome = "Pikachu";
var msg = "Está sentindo a energia?";

console.log("A soma de x e y é:" + somar(20,90));
console.log("A média de x e y é:" + media(20,90));
console.log("A divisão de x e y é:" + divisao(20,90));
console.log("A subtração de x e y é:" + subtrair(20,90));
console.log("A multiplicação de x e y é:" + multiplicacao(20,90));
console.log(mensagem(nome,msg));