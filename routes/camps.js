import { Router } from 'express'
import { Campground } from "../models/campground.js"

const router = Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/campgrounds', async (req, res) => {
  const campgrounds = await Campground.find({})
  res.render('campgrounds/index', { campgrounds })
})

export {
  router
}