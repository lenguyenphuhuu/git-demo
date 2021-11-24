var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');
var db = mongoose.connection;
// bat su kien loi
db.on('error',function(err){

  if(err) 
  console.log(err);

});
//tao bang chi tiet san pham
db.once('open',function(){

  let Schema = mongoose.Schema;
  let student = new Schema({

    fullname: String,
    email: String,
    password: String,
    phone: Number,
    adress: String,
    
  });
//student thu 1
    let modelstd = mongoose.model('users',student);
    let data = {
        fullname: 'phuhuu',
        email: 'lnphuu15@gmail.com',
        password: 'huu123',
        phone: 0974377532,
        adress: 'Quang Tri',
    }
    let table = new modelstd(data);
    table.save(function(err,data){

      if (err) return console.error(err);
      console.log(data);

    });
//student thu 2
let modelstd1 = mongoose.model('users',student);

let data1 = {
    fullname: '18it154',
    email: 'Nguyen Thanh Nhan',
    password: '18it3',
    phone: 0974345234,
    adress: 'Thua Thien Hue',
}
let table1 = new modelstd1(data1);
table1.save(function(err,data1){

  if (err) return console.error(err);
  console.log(data1);

});
//student thu 3
let modelstd2 = mongoose.model('users',student);

    let data2= {
        fullname: '18it121',
        email: 'Van Viet Hieu',
        password: '18it3',
        phone: 0974543234,
        adress: 'Nghe An',
    }
    let table2 = new modelstd(data2);
    table2.save(function(err,data2){

      if (err) return console.error(err);
      console.log(data2);

    });
//student thu 4
let modelstd3 = mongoose.model('users',student);

    let data3 = {
        fullname: '18it147',
        email: 'Tran Trung Hieu',
        password: '18it2',
        phone: 0974453234,
        adress: 'Quang Tri',
    }
    let table3 = new modelstd(data3);
    table3.save(function(err,data3){

      if (err) return console.error(err);
      console.log(data3);

    });
//student thu 5
let modelstd4 = mongoose.model('users',student);

    let data4 = {
        fullname: '18it198',
        email: 'Vo Duc Canh',
        password: '18it2',
        phone: 09744387238,
        adress: 'Quang Binh',
    }
    let table4 = new modelstd(data4);
    table4.save(function(err,data4){

      if (err) return console.error(err);
      console.log(data4);

    });

});


