var  Db = require('./dboperations');
var  Produto = require('./Produto');
var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
    console.log('middleware');
    next();
  });
   
   
router.route('/Produto').get((request, response) => {
    Db.getProdutos().then((data) => {
      response.json(data[0]);
    })
  })
  
router.route('/Produto/:Cd_Produto').get((request, response) => {
    Db.getOrder(request.params.id).then((data) => {
      response.json(data[0]);
    })
  })
  
    
    
var  port = process.env.PORT || 8090;
  app.listen(port);
  console.log('API Produto is runnning at ' + port);