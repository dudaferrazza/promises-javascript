function fazerPedido() {
  return new Promise((resolve, reject) => {
    const aprovado = true;

    setTimeout(() => {
      if (aprovado) {
        resolve("Pedido aprovado e enviado!");
      } else {
        reject("Erro no pedido.");
      }
    }, 2000);
  });
}

fazerPedido()
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.log(erro);
  });