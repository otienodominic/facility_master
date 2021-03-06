const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}

db.mongoose = mongoose

db.user = require('./userModel')
db.facility = require('./facilityModel')
db.ratings = require('./ratingModel')

module.exports = db