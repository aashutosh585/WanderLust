const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.createReview = async (req,res)=>{
    let { id } = req.params;
    let listing = await Listing.findById(id);
    let newReview = new Review(req.body.review);

    newReview.author = req.user._id; 
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("success", "New Review added");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyReview = async (req, res) => {
    let { id, reviewId } = req.params;

    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing not found");
      return res.redirect("/listings");
    }

    const review = await Review.findById(reviewId);
    if (!review) {
      req.flash("error", "Review not found");
      return res.redirect(`/listings/${id}`);
    }

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } }); // $pull is used to remove elements from an array that match a specified condition.
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted");
    res.redirect(`/listings/${id}`);
};