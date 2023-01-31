var  config = require('./dbconfig');
const  sql = require('mssql');

async  function  getProdutos() {
    try {
      let  pool = await  sql.connect(config);
      let  products = await  pool.request().query("select * from Fornecedor.dbo.Produto");
      return  products.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

  async  function  getProduto(CdProduto) {
    try {
      let  pool = await  sql.connect(config);
      let  product = await  pool.request()
      .input('input_parameter', sql.Int, CdProduto)
      .query("SELECT * from select * from Fornecedor.dbo.Produto where Cd_Produto = @input_parameter");
      return  product.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

  module.exports = {
    getProdutos:  getProdutos,
    getProduto:  getProduto
    }