const express=require("express")
const app=express();
var path=require("path")
const bodyparser=require("body-parser")
const routes=require("./router/routers")


app.use(bodyparser.urlencoded({extended:false}))

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
app.set(express.static(path.join(__dirname,"public")))

app.use("/",routes)

app.listen(8007,function(){
    console.log("your server running on port 8007")})

    module.exports=app;