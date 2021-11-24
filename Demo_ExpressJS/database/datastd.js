var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');
var db = mongoose.connection;
// bat su kien loi
db.on('error',function(err){

  if(err) 
  console.log(err);

});
//tao bang chi tiet san pham
  let Schema = mongoose.Schema;
  let student = new Schema({

    msv: String,
    name: String,
    class: String,
    phone: Number,
    adress: String,
    work: String
    
  },{
    collection: 'students'
  });
//student thu 1
    let modelstd = mongoose.model('students',student);

    const data = async ()=>{
      let std = await modelstd.find();
      console.log(std);
    }
    data.then(function(kq){
      console.log(kq);
    })
  module.exports = data;



