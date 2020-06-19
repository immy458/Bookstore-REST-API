require("dotenv").config();    
const express = require("express");
const app = express();
const bookRouter = require("./routes/public");     
app.use(express.json());
app.use("/books", bookRouter);  
app.get("/auth", (req, res) => {

   if(req.body.username=="imtiyaz" && req.body.password=="pass123" || req.body.username=="Darth Vader" && req.body.password=="pass")
    {
        var name=req.body.username //varible to store the name of the user who has logged in.
        exports.name=name;  //exporting it so that i can use it to verify updates and deletes.
            res.json({ 
            message: "welcome",
            success: "1",
            name: `${req.body.username}`,
            password: `${req.body.password}`
     });
    }
    else{
        res.json({
            success: "0",
            login:"failed"
        });
    }
});

app.listen(process.env.APP_PORT, () => {
    console.log("App running on port!!:", process.env.APP_PORT);
});

