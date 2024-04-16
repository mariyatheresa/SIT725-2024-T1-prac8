const Feedback = require('../models/feedback');

exports.submitFeedback = async (req, res) => {
    const newFeedback = new Feedback({
        foodName: req.body.foodName,
        imageURL: req.body.imageurl,
        review: req.body.review
    });

    try {
        const savedFeedback = await newFeedback.save();
        console.log('Review saved successfully:', savedFeedback);
        res.redirect('/');
    } catch (err) {
        console.error('Error saving review:', err);
        res.status(500).send('Error saving Review to database');
    }
};

exports.fetchReviews = async (req, res) => {
    try {
        const reviews = await Feedback.find();
        res.status(200).json(reviews);
    } catch (err) {
        console.error('Error fetching reviews:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
