function editarUsuario(form) {
  const linha = buscarLinha(form.usuarioId);

  aba_usuarios
    .getRange(linha, 2, 1, aba_usuarios.getLastColumn() - 1)
    .setValues([
      [
        form.nomeDoUsuario,
        form.apelido,
        form.sexoUsuario,
        form.email,
        form.dataDeNascimento,
        form.telefone,
      ],
    ]);
  return "Usuário Alterado Com Sucesso";
}

function buscarLinha(id = "3") {
  const ids = aba_usuarios
    .getRange(2, 1, lastRow - 1, 1)
    .getValues()
    .map((id) => id[0]);
  const index = ids.indexOf(Number(id));
  const row = index + 2;
  return row;
}
