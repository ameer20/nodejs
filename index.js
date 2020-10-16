const { response } = require("express");
var express = require("express");
const { request } = require("http");
// const { request } = require("http");
var app = express();
const cars = ["Audi", "BMW","Creta"];
const PORT =3000;

app.use(express.json()); //to recognize the incoming Request Object as a JSON Object
app.use(express.urlencoded()); //recognize the incoming Request Object as strings or arrays

app.get("/url", (request , response) => {
    response.status(200).send(["Tony","Lisa","Michael","Ginger","Food"]);
   });

   app.get("/car",(request, response) => {
       response.status(203).send(cars);
   });

   app.post("/url", (request, response) => {
    response.status(201).send(["aman","Lisa","Michael","Ginger","Food"]);
   });

   app.post("/car", function (request, response) {
    const { body } = request;
    cars.push(body.name);
    response.status(204).send({ name: body.name });
  });
  

app.listen(3000,() => {console.log(`server running on port ${PORT}`)
}
)
