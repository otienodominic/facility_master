const mongoose = require('mongoose');

const Facility = mongoose.model(
  'Facility',
  new mongoose.Schema({
    facilityCode: {
        type: Number,
        unique: true
    }, 
    name:{
        type: String,
        required: true
    }, 
    facilityType:{
        type:String,
        enum: ['Public', 'Special Clinic', 'Private'],
        required: true
    },  
    operationStatus: {
         type: String,
        enum: ['Operational', 'Not operational'],
        required: true 	
    }, 
    owner: {
        type: String,
        enum: ['Ministry of Health', 'Private Practice', 'Non-Governmental Organisations']
    }, 
    contact: {
        type: String,	
    }, 
    services: [{
        type: String,
        required: true,
    }],
    beds: {
        type: Number,
        required: true,
    }, 
    cots: {
        type: Number,
        required: true,
    },  
    location: {
        type: String,
        enum:[County, Constituency, Ward],
        required: true,
    }, 
    landmark: {
        type: String,
        required: true,
    },
    ratings:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ratings"
          }],
  }),
);

module.exports = Facility;
