var express = require("express") 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb'); 
var app = express() 
const uri = "mongodb+srv://mariyatheresa:mariyamongodb@cluster1.5n0s5rg.mongodb.net/"; 
var port = process.env.port || 2008; 
let collection; 
app.use(express.static(__dirname + '/public')) 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 



async function runDBConnection() { 
    try { 
        await mongoose.connect(uri); 
        console.log("You successfully connected to MongoDB!");
    } catch (ex) { 
        console.error(ex); 
    } 
} 
runDBConnection().catch(console.dir);
// Define feedback schema and model
const feedbackSchema = new mongoose.Schema({
    foodName: String,
    imageURL: String,
    review: String
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

app.post('/submit-feedback', (req, res) => {

    const newFeedback = new Feedback({
        foodName : req.body.foodName,
        imageURL : req.body.imageurl,
        review : req.body.review
    });

    newFeedback.save()
    .then(savedFeedback => {
      console.log('Review saved successfully:', savedFeedback);
      res.redirect('/');
    })
    .catch(err => {
      console.error('Error saving review:', err);
      res.status(500).send('Error saving Review to database');
    });
});

// Fetch reviews from the database
app.get('/api/reviews', async (req, res) => {
    try {
        const reviews = await Feedback.find();
        res.status(200).json(reviews);
    } catch (err) {
        console.error('Error fetching cards:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
  });

app.get('/', (req, res) => { 
    res.render('index.html'); 
}); 

app.listen(port,()=>{
    console.log("server running on : "+port)
    })


