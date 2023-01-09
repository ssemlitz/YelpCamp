import { Router } from 'express'
import { Campground } from "../models/campground.js"
// import { campgroundSchema } from '../schemas.js'
// import { validateCampground } from '../middleware/middleware.js'

const router = Router()

// router.get('/', async (req, res) => {
//   const campgrounds = await Campground.find({})
//   res.render('campgrounds/index', { campgrounds })
// })

router.get('/', async (req, res) => {
  Campground.find({})
  .then(campgrounds => {
    res.render('campgrounds/index', {
      campgrounds,
      title: 'All Campgrounds'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
})

router.get('/new', (req, res) => {
  res.render('campgrounds/new', {
    title: 'Add Campground'
  })
})

router.post('/', async (req, res) => {
  const campground = new Campground(req.body.campground)
  await campground.save()
  res.redirect(`/campgrounds/${campground._id}`)
})

router.get('/:id', async (req, res) => {
  const campground = await Campground.findById(req.params.id)
  res.render('campgrounds/show', { campground })
})

router.get('/:id/edit', async (req, res) => {
  const campground = await Campground.findById(req.params.id)
  res.render('campgrounds/edit', { campground })
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground })
  res.redirect(`/campgrounds/${campground._id}`)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const campground = await Campground.findByIdAndDelete(id)
  res.redirect('/campgrounds')
})




export {
  router
}