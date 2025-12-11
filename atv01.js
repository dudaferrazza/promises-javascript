const downloadArquivo = new Promise((resolve, reject) => {
  const erro = false;

  setTimeout(() => {
    if (!erro) {
      resolve("Download concluído!");
    } else {
      reject("Erro no download.");
    }
  }, 3000);
});

downloadArquivo
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.log(erro);
  });