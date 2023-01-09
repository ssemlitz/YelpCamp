import { Campground } from "../models/campground.js";

function create(req, res) {
  // for (let key in req.body) {
	//   if (req.body[key] === '') delete req.body[key]
	// }
  // req.body.author = req.user.profile._id
  Campground.create(req.body)
  .then(campground => {
    res.redirect('/campgrounds')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/campgrounds')
  })
}

export {
  create
}