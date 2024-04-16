const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const feedbackController = require('./controllers/feedbackControllers');
const path = require('path');

const app = express();
const uri = "mongodb+srv://mariyatheresa:mariyamongodb@cluster1.5n0s5rg.mongodb.net/";
const port = process.env.PORT || 2008;


mongoose.connect(uri)
    .then(() => console.log("You successfully connected to MongoDB!"))
    .catch(console.error);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/submit-feedback', feedbackController.submitFeedback);
app.get('/api/reviews', feedbackController.fetchReviews);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(port, () => {
    console.log("Server running on port: " + port);
});


