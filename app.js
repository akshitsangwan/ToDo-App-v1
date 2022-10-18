const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

const items = ["Complete Assignment", "Read book", "Wash shoes"];
const workItems = [];

app.get("/", function(req,res) {
    const today = date();

    res.render("list",{listTitle: today, addItems: items});
});

app.post("/", function(req,res) {
    const item = req.body.newItem;

    if(req.body.listName === "Work List")
    {
        workItems.push(item);
        res.redirect("/work");
    }
    else
    {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function(req,res) {
    res.render("list",{listTitle: "Work List", addItems: workItems});
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on port 3000");
});