const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // mysql 모듈 사용

let corsOptions = {
    origin: "*",
    credential: true,
  };
  
var connection = mysql.createConnection({
    host: "damtabase.cvg2imyxpe0d.ap-northeast-2.rds.amazonaws.com",
    user: "root",
    port: 3306,
    password: "dnjsrl0612",
    database: "dambase", 
  });
  
connection.connect();
  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(bodyParser.json());

//report

app.post("/devDelete", (req, res)=>{
  var pin = req.body.pinNo; 
  connection.query("delete from userpin where pinNo=(" + pin + ");",
  (err, result) => {
      res.send(result);
    }
    );
})

app.post("/devLon", (req, res) => {
  var pin = req.body.pinNo
  connection.query("update userpin set Longitude = (" + loc + "), Latitude = (" + lat + ") where pinNo = (" + pin + ");",
  (err, result) => {
    res.send(result);
  }
  )
})

app.post("/devDes", (req, res) => {
  var pin = req.body.pinNo
  connection.query("update userpin set Description = (" + text + ") where pinNo = (" + pin + ");",
  (err,result) => {
    res.send(result);
  })
})



// app.post("/dev", (req, res) => {

//   var selected = req.body.selected
//   var pin = req.body.pinNo
//   var loc = req.body.loc
//   var lat = req.body.lat
//   var text = req.body.text

//   if(selected === "흡연구역 이름"){
//     connection.query("?");
//   }else if(selected === "위치수정"){
//     connection.query("update userpin set Longitude = (" + loc + "), Latitude = (" + lat + ") where pinNo = (" + pin + ");");
//   }else if(selected === "상세정보 수정"){
//     connection.query("update userpin set Description = (" + text + ") where pinNo = (" + pin +")");
//   }else if(selected === "삭제 요청"){
//     connection.query("delete from userpin where pinNo = (" + pin +")");
//   }
// })


app.get("/", (req, res) => {
  connection.query("SELECT * FROM report", function (err, rows, fields) {
    if (err) {
      console.log("불러오기 실패");
    } else {
      console.log("불러오기 성공");
      res.send(rows);
    }
  });
});





app.listen(4001, () => console.log("Server is running on port 4001..."));