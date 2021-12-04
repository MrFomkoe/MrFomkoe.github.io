var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);



/*
import { MongoClient } from 'mongodb';

var MongoClient = require(mongodb)


const uri = "mongodb+srv://group3:jsgroupproject@cluster0.ivs3a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
console.log("vai strādā") */

/*
const characterCard = document.querySelector(".js-character");

const fetchData = () => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then(({ results }) => {
      let html = "";
      results.map(({ image, name }) => {
        html =
          html +
          `
        <div class="card">        
        <div class="card__image-wrapper margin-bottom--16">
          <img class="card__image" src=${image} alt=${name}>
          </div> 
          <h1 class="heading heading--name">${name}</h1>
        </div>
            `;
      });
      characterCard.innerHTML = html;
    });
};
fetchData();

*/