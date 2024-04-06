//We can create our own package.json file by npm init command.

const figlet=require("figlet");

figlet("Government name", function(err, data){
    if(err){
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
})