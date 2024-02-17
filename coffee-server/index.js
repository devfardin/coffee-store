const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sdbmurj.mongodb.net/?retryWrites=true&w=majority`;

console.log(process.env.name);



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const coffeeCollection = client.db("coffeeDB").collection("coffee");
        const userCollection = client.db("coffeeDB").collection("user");
        // const userCollection= client.db('coffeeDb').collection('users');

        app.get('/coffee', async(req, res)=>{
            const cursore=coffeeCollection.find();
            const result= await cursore.toArray()
            res.send(result)
        })

        app.get('/coffee/:id', async(req, res)=>{
            const id=req.params.id
            const query={_id: new ObjectId(id)}
            const result= await coffeeCollection.findOne(query)
            res.send(result)
        })


        app.post('/coffee', async (req, res) => {
            const newCoffee = req.body;
            console.log(newCoffee)
            const result = await coffeeCollection.insertOne(newCoffee)
            res.send(result)
        })

        app.put('/coffee/:id', async(req, res)=>{
            const id=req.params.id
            const filter ={_id: new ObjectId(id)}
            const options = { upsert: true }
            const updateCoffee=req.body;
            const Coffee={
                $set:{
                    name:updateCoffee.name,
                     category:updateCoffee.category,
                     taste:updateCoffee.taste,
                     Supplier:updateCoffee.Supplier,
                     details:updateCoffee.details,
                     coffeeChef:updateCoffee.coffeeChef,
                     price:updateCoffee.price,
                     photo:updateCoffee.photo
                }
            }
            const result= await coffeeCollection.updateOne(filter, Coffee, options)
            res.send(result)
        })

        app.delete('/coffee/:id', async(req, res)=>{
            const id=req.params.id;
            const query ={_id: new ObjectId(id)}
            const result= await coffeeCollection.deleteOne(query)
            res.send(result)
        })

        // Users data collection
        app.get('/users', async(req, res)=>{
            const result= await userCollection.find().toArray()
            res.send(result)
        })

        app.delete('/users/:id', async(req, res)=>{
            const id= req.params.id;
            const query={_id: new ObjectId(id)}
            const result= await userCollection.deleteOne(query)
            res.send(result)
        })


        app.post("/users", async (req, res) => {
            const user = req.body;
            console.log(user);
            const result = await userCollection.insertOne(user);
            console.log(result);
            res.send(result);
          });

          app.patch('/users', async(req, res)=>{
            const user= req.body;
            const filter={email: user.email}
            const options = { upsert: true };
            console.log(user.loginTime);
            const updateUser={
                $set:{
                    loginTime: user.loginTime
                }
            }
            const result= await userCollection.updateOne(filter, updateUser)
            res.send(result)
          })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('this is result')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})