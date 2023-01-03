import { Router } from 'express'
import { Campground } from "../models/campground.js"

const router = Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/makecampground', async (req, res) => {
  const camp = new Campground({ title: 'My backyard', description: 'cheap camping'})
  await camp.save()
  res.send(camp)
})

export {
  router
}