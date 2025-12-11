function verificarLogin(usuario, senha) {
  return new Promise((resolve, reject) => {
    const loginValido = usuario === "admin" && senha === "12345";

    if (loginValido) {
      resolve("Login bem-sucedido!");
    } else {
      reject("Credenciais inválidas.");
    }
  });
}

verificarLogin("admin", "12345")
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.log(erro);
  });