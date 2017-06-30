const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require('multer');
const upload = multer({dest:'upload/'});
const app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.post('/upload', upload.single('file'), function(req, res){
  
  return res.json(req.file);
});





app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server connected!");
})