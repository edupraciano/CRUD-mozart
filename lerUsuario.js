function readUsers() {
  const dataUsuarios = aba_usuarios.getDataRange().getDisplayValues();
  dataUsuarios.shift();

  if (dataUsuarios.length == 0) {
    return "Não foi encontrado usuários para a pesquisa";
  }
  // console.log(dataUsuarios);
  return dataUsuarios;
}
