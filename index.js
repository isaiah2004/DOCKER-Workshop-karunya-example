const app = require("express")();

app.get('/', (req,res)=> 
    res.json({messsage: 'You have docked into docker!'})
);

const port = process.env.PORT|| 8080;