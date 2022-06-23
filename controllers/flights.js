import {Flight} from "../models/flight.js"

function newFlight(req, res){
  // const newFlight = new Flight();
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

function show(req, res){
  Flight.findById(req.params.id)
  .then(flight => {
    res.render("flights/show", {
      flight: flight,
      title: "Flight Detail",
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function deleteFlight(req, res){
  Flight.findByIdAndDelete(req.params.id)
  .then(()=> {
    res.redirect("/flights")
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function edit(req, res){
  Flight.findById(req.params.id)
  .then(flight => {
    res.render("flights/edit", {
      flight: flight,
      title: "Edit Flight"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function update(req, res){
  Flight.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(flight => {
    res.redirect(`/flights/${flight._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function createTicket(req, res){
  Flight.findById(req.params.id)
  .then(flight => {
    flight.tickets.push(req.body)
    flight.save() 
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}


export{
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  edit,
  update,
  createTicket,
}