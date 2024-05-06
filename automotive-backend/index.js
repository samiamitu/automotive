const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { ObjectId } = require("mongodb");

const port = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ni8nft9.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    //must close this line. or vercel will not work
    // await client.connect();

    const products = client.db("Assignment-10").collection("products");
    const users = client.db("Assignment-10").collection("users");

    //                              products
    //Create
    app.post("/brands", async (req, res) => {
      const product = req.body;
      const result = await products.insertOne(product);
      res.send(result);
    });
    //Read                  find specific brand car    when entering brands page
    app.get("/brands/:brand", async (req, res) => {
      const brand = req.params.brand;
      const query = { brand: brand };
      const result = await products.find(query).toArray();
      res.send(result);
    });
    // getSingleData to update
    app.get("/brands/product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await products.findOne(query);
      res.send(result);
    });
    //Update
    app.put("/brands/product/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      console.log(id, data);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedData = {
        $set: {
          name: data.name,
          type: data.type,
          image: data.image,
          price: data.price,
          description: data.description,
          rating: data.rating,
          brand: data.brand,
        },
      };
      const result = await products.updateOne(filter, updatedData, options);
      res.send(result);
    });

    //Delete
    // app.delete("/brands/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const result = await products.deleteOne(query);
    //   res.send(result);
    // });
    //                                       /products

    //                          users
    //Create users
    app.post("/cart", async (req, res) => {
      const userInfo = req.body;
      const result = await users.insertOne(userInfo);
      res.send(result);
    });

    //Read            //get users data
    app.get("/cart/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await users.find(query).toArray();
      res.send(result);
    });
    //Delete users
    app.delete("/cart/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await users.deleteOne(query);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
