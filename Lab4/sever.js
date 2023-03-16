const express = require("express");
const app = express();

const port = 3000;
const expressHbs = require('express-handlebars');

const hbs = expressHbs.create({
    extname: '.hbs',
    defaultLayout: 'baiTap',
    layoutsDir: 'D:/FPT/Lap_Trinh_Sever_Android/Lab4/views'
});

app.engine('.hbs', hbs.engine);

app.set('view engine', '.hbs');

app.get("/handlebars", function (req, res) {
    res.render('baiTap');
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
