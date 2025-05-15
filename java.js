/*declarando variáveis*/
let altura;
let peso;
let imc;

//*criando uma função para calculo do IMC*/
/*comentario de bloco*/
//comentario de linha
function calcImc() {
  altura = document.getElementById("al").value / 100;
  peso = document.getElementById("ps").value;

  /* 
tipos de dados 
int = numeros inteiro
float = de ponto flutuante, exemplo o preço da gasolina 6.27
string = texto
boolean = verdadeiro ou falso
*/

  imc = peso / (altura * altura); // calcular o IMC
  window.alert("Seu IMC é:" + imc.toFixed(2)); //monstrando o imc em janela
}
