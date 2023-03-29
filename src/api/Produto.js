class Produto {
  constructor(Cd_Produto, Nm_Produto, Nm_Cor, Nm_Cidade, Qt_Peso) {
    this.Cd_Produto = Cd_Produto;
    this.Nm_Produto = Nm_Produto;
    this.Nm_Cor = Nm_Cor;
    this.Nm_Cidade = Nm_Cidade;
    this.Qt_Peso = Qt_Peso;
  }
}

module.exports = { Produto };