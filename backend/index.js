const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient } = require("mongodb");

const app = express();
app.use(express());
app.use(cors());
const port = process.env.PORT || 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sz6ue.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db(process.env.DB_NAME);
    const services = database.collection("services");
    // create a document to insert
    const docs = [
      {
        id: 1,
        name: "ENGINE DIAGNOSTIC",
        price: "300",
        description:
          "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        img: "https://i.ibb.co/dGDkr4v/1.jpg",
      },
      {
        id: 2,
        name: "WHEEL ALIGNMENT",
        price: "100",
        description:
          "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        img: "https://i.ibb.co/tY8dmnP/2.jpg",
      },
      {
        id: 3,
        name: "OIL CHANGING",
        price: "150",
        description:
          "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        img: "https://i.ibb.co/Yh04YVw/3.jpg",
      },
      {
        id: 4,
        name: "BRAKE REPARING",
        price: "180",
        description:
          "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        img: "https://i.ibb.co/ZX2Cbkn/4.jpg",
      },
      {
        id: 5,
        name: "WASH AND GLASSING",
        price: "100",
        description:
          "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        img: "https://i.ibb.co/FgQ3jXp/5.jpg",
      },
      {
        id: 6,
        name: "COMPLETE ANALYSIS",
        price: "300",
        description:
          "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa",
        img: "https://i.ibb.co/zJy5ZDd/6.jpg",
      },
    ];

    app.get("/services", async (req, res) => {
      const result = await services.find({});
      const data = await result.toArray();
      res.send(data);
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Response from backend");
});

app.listen(port, () => console.log("Server started @ " + port));
