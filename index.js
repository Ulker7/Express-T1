const express = require("express");

const app = express();

const employees = [
    {
        id: 111,
        name: "Aynur",
        age: 25,
        salary: 600
    },
    {
        id: 112,
        name: "Aydan",
        age: 29,
        salary: 650
    },
    {
        id: 113,
        name: "Zehra",
        age: 31,
        salary: 700
    }
]

app.get("/",(req,res)=> {
    res.send("Welcome")
})

app.get("/employees/",(req,res)=> {
    res.send(employees)
})

app.get("/employees/:id",(req,res)=> {
    const employee = employees.find(item=> item.id == req.params.id);
    res.send(employee);
})

app.listen(8080,() =>{
    console.log("Server is starting...");
})