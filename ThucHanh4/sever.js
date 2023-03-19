const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const expressHbs = require('express-handlebars');
const {tinhToan} = require('./views/tinhToan');
var url = require('url');


app.engine('.hbs', expressHbs.engine({
    extname: "hbs",
    layoutsDir: __dirname +  '/views/layouts/'
}));

app.set('view engine', '.hbs');

app.use(express.static(__dirname));


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render('home',{
        layout:'main',
        showKetQua: false,
    })
});

// app.get("/tinhtoan", function (req, res) {
//     res.render('home',{
//         layout:'main',
//         showKetQua: true,
//         ketQua: tinhToan(req.body.soA,req.body.soB,req.body.pheptinh)
//     })
// });

app.post('/tinhtoan',function(req,res){
    res.render('home',{
        layout:'main',
        showKetQua: true,
        ketQua: tinhToan(req.body.soA,req.body.soB,req.body.pheptinh),
        soA:req.body.soA,
        soB:req.body.soB,
        pheptinh:req.body.pheptinh,
    })
    console.log(req.body);
})


app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
