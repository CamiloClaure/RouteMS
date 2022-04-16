import express from "express"
import bodyParser from "body-parser"
import {Airport} from "./Domain/Model/Airport/Airport"
import {Flight} from "./Domain/Model/Flight/Flight"
import {FlightBuilder} from "./Builder/FlightBuilder"
import {DateValue} from "./SharedKernel/ValueObjects/DateValue"
import {Destination} from "./Domain/Model/Destination/Destination"
import {DestinationBuilder} from "./Builder/DestinationBuilder"

const app = express()
app.listen(3000)
app.use(bodyParser.json())

app.post("/", function (req, res) {
  const airPort = new Airport("Viru Viru")
  const flight = new FlightBuilder()
    .setFlightDate(new Date())
    .setArrivalTime(new Date())
    .setDepartureTime(new Date())
    .setDestination(new DestinationBuilder().setDestinationName("La Paz").build())
    .build()
  const flightCode = airPort.getFlightCode(flight.flightDate.getDate(flight.flightDate), flight.destination)
  res.status(200).send({flightCode})
})
