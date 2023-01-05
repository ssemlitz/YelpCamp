import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
  title: String,
  image: String,
  price: Number,
  description: String,
  location: String,
})

const Campground = mongoose.model('Campground', CampgroundSchema)

export {
  Campground
}

// https://source.unsplash.com/collection/483251/1600x900