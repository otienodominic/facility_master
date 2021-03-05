const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}

db.mongoose = mongoose

db.user = require('./userModel')
db.file = require('./facilityModel')

module.exports = db