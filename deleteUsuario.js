function apagarUsuario(id) {
  const linha = buscarLinha(id);
  aba_usuarios.deleteRow(linha);
}
