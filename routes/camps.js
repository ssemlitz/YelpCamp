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

router.get('/campgrounds.new', (req, res) => {
  res.render('campgrounds/new')
})

router.get('/campgrounds/:id', async (req, res) => {
  const campground = await Campground.findById(req.params.id)
  res.render('campgrounds/show', { campground })
})

router.get('/campgrounds/:id/edit'), async (req, res) => {

}

router.put('/campgrounds/:id', async (req,res) => {
  const {id} = req.params
  Campground.fin
})

router.post('/campgrounds', async (req,res) => {
  const campground = new Campground(req.body.campground)
  await campground.save()
  res.redirect(`/campgrounds/${campground._id`)
})









export {
  router
}