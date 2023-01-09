// import { campgroundSchema } from "../schemas.js"
import Joi from 'joi'

function validateCampground(req, res, next) {
  const { error } = campgroundSchema.validate(req.body);
  console.log(req.body);
  if (error) {
      const msg = error.details.map(el => el.message).join(',')
      throw new ExpressError(msg, 400)
  } else {
      next();
  }
}

function passDataToView(req, res, next) {
  res.locals.user = req.user ? req.user : null
  res.locals.googleClientID = process.env.GOOGLE_CLIENT_ID
  next()
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/')
}

export {
  validateCampground,
  passDataToView,
  isLoggedIn,
}
