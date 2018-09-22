var botao = document.querySelector("#botao");
botao.addEventListener("click", function (event) {
  event.preventDefault();
  numero = parseInt(document.querySelector("#numero").value);
  resultado = document.querySelector("#resultado");
  for (var i = 0; i <= 10; i++) {
    console.log(numero * i);
    document.getElementById ("resultado").innerHTML = + '<p>' + numero * i + '</p>';
    // document.querySelector("resultado").textContent = numero * i;
  }
  // if (numero != number.value){
  // } alert ("Erro: insira um número");
})