var express=require('express');
var router=express.Router();
var ctrlLocations=require('../controllers/locations');
var ctrlReviews=require('../controllers/reviews');

//			locationS
router.get('/locations', ctrlLocations.locationsListByDistance);
router.post('/locations', ctrlLocations.locationsCreate);
router.get('/locations/:locationid', ctrlLocations.locationsReadOne);
router.put('/locations/:locationid', ctrlLocations.locationsUpdateOne);
router.delete('/locations/:locationsid', ctrlLocations.locationsDeleteOne);

//			ReviewS
router.post('/locations/:locationid/reviews', ctrlReviews.reviewsCreate);
router.get('/locations/:locationsid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
router.put('/locations/:locationsid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
router.delete('/locations/:locationsid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);

module.exports=router;