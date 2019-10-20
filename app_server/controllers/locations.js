/* GET 'home' page */
const home = function(req, res){
   res.render('home', { title: 'Home' });
};


/* GET 'Location info' page */
const locationInfo = function(req, res){
    res.render('location-info', { title: 'Location info' });
};


/* GET 'Add review' page */
const addReview = function(req, res){
    res.render('location-review-form', { title: 'Add review' });
};


module.exports = {
    home,
    locationInfo,
    addReview
};

