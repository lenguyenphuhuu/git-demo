var express = require('express');
const app = express();
var router = express.Router();
 
app.set("views", "./views");
//Khai báo templateEngine sử dụng
app.set("view engine", "pug");

router.get('/', function(req, res){
    res.render("form");
});
router.post('/', function(req, res){
   res.send('Ban da truy cap dia chi /user bang phuong thuc POST');
});
 

module.exports = router;