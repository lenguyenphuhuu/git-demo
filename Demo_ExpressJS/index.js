const express = require("express");
const app = express();
//const pple = require('./data.json');
const data = require('./database/datastd');
const bodyParser = require("body-parser");

console.log(data());
//Khai báo đường dẫn đến thư mục chứa các template
app.set("views", "./views");
//Khai báo templateEngine sử dụng
app.set("view engine", "pug");
// parsing application/json
app.use(bodyParser.json());
//  parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res,next) => {
  res.render("home",{data:data});
}); 

var insertRouter = require('./insertRouter');
app.use('/insert', insertRouter);
 
//them mot sinh vien vao danh sach
// app.post("/",(req, res) => {
//   async function run(){
  
//     let Schema = mongoose.Schema;
//     let student = new Schema({
  
//       msv: String,
//       name: String,
//       class: String,
//       phone: Number,
//       adress: String,
//       work: String
      
//     });
//     let modelstd = mongoose.model('student',student);
//     await modelstd.create({
//       _id: new mongoose.Types.ObjectId(),
//       msv: req.body.msv,
//       class: req.body.class,
//       phone: req.body.phone,
//       adress: req.body.phone,
//       work: req.body.work
//   });
//   }

// });
app.listen(8000);