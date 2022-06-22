import {Flight} from "../models/flight.js"

function newFlight(req, res){
  res.render("flights/new", {
    title: "Add Flight"
  })
}

function create(req, res){
  Flight.create(req.body)
  .then(flight => {
    console.log("CREATED FLIGHT:", flight)
    // SEND A GET REQUEST TO THIS URL!
    res.redirect(`/flights`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function index(req, res){
  Flight.find({})
  .then(flights => {
    res.render("flights/index", {
      flights: flights,
      title: "All Flights",
    })
  })
}

export{
  newFlight as new,
  create,
  index,
}