function agregarUsuario(form) {
  const id = gerarId();
  const nome = form.nomeDoUsuario;
  const apelido = form.apelido;
  const sexoUsuario = form.sexoUsuario;
  const email = form.email;
  const dataDeNascimento = form.dataDeNascimento;
  const dataDeNascimentoFormatada = Utilities.formatDate(
    new Date(dataDeNascimento),
    "GMT-3",
    "dd/MM/yyyy"
  );
  const telefone = form.telefone;

  aba_usuarios.appendRow([
    id,
    nome,
    apelido,
    sexoUsuario,
    email,
    dataDeNascimentoFormatada,
    telefone,
  ]);
  return "Usuário Cadastrado Com sucesso.";
}

function gerarId() {
  let id = 1;
  if (lastRow === 1) {
    return id;
  }
  const ids = aba_usuarios
    .getRange(2, 1, lastRow - 1, 1)
    .getValues()
    .map((id) => id[0]);
  let maxId = 0;
  ids.forEach((id) => {
    if (id > maxId) {
      maxId = id;
    }
  });
  return maxId + 1;
}
