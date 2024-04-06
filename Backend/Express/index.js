const obj = require ('express');
let port=3000;
let app = obj();

//For listening the request.
app.listen(port, ()=> console.log(`Hello, You are using this port ${port}`) );

//For handling the request. and giving a response(redirecting)
//It listens all the request and is used to add modifications even before they reach their final destination.

/*app.use((req,res)=> {
    console.log("Req received");

    // res.send("This is a resonse");
    let obj="<h1>Who's that Pokemon.</h1> <hr> <ul> <li>NiggaSauras</li> <li>Negawatt</li> </ul>";
    res.send(obj);
}); */

app.get("/",(req,res)=>{
    res.send("<h1>This is root URL.</h1>");
});

app.get("/apple",(req,res)=>{
    res.send("<h1>You wanted apples.</h1>");
});

app.get("/mango",(req,res)=>{
    res.send("<h1>You wanted mangoes.</h1>");
});

app.get("*",(req,res)=>{
    res.send("This page does not exists.");
});

app.post("/",()=>{
    res.send("This was post request");
});