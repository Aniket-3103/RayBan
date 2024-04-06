const express=require("express");
let app=express();

let port=3000;
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});

app.get("/",(req,res)=>{
    res.send("This is root page URL.");

});

//path parameter
app.get("/:username/:id",(req,res)=>{
    console.log(req.params);
    res.send(`This is @${req.params.username} page.`);
});

//query string(/search?q="")
app.get("/search",(req,res)=>{
    console.log(req.query);
    let {q}=req.query;
    res.send(`Search results for query: ${q}`);
});
