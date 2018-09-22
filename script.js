var botao = document.querySelector("#botao");
botao.addEventListener("click", function (event) {
  event.preventDefault();
  numero = parseInt(document.querySelector("#numero").value);
  resultado = document.querySelector("#resultado");
  for (var i = 0; i <= 10; i++) {
    var p = document.createElement('p');
    p.innerHTML = i + " x " +numero + " = "+ numero * i;
    resultado.appendChild(p);
    // document.getElementById ("resultado").innerHTML =+  i + '<br>';
    // document.querySelector("resultado").textContent = numero * i;
  }
  // if (numero != number.value){
  // } alert ("Erro: insira um número");
})