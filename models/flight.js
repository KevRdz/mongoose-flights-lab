import flights from "mongoose"

const Schema = flights.Schema

const flightSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date,

}, {
  timestamps: true,
})

const Flight = flights.model("Flight", flightSchema)

export{
  Flight
}