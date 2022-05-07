import express from "express"
import bodyParser from "body-parser"
import {createConnection} from "typeorm";
import flightRouter from "./WebApi/Controllers/FlightController";
import routeControllerRouter from "./WebApi/Controllers/RouteController";

const app = express()
app.listen(3000)
app.use(bodyParser.json())
app.use("/api/flight",flightRouter)
app.use("/api/route",routeControllerRouter)
app.post("/", function (req, res) {
  // const airPort = new Airport("Viru Viru")
  // const flight = new FlightBuilder()
  //   .setFlightDate(new Date())
  //   .setArrivalTime(new Date())
  //   .setDepartureTime(new Date())
  //   .setDestination(new DestinationBuilder().setDestinationName("La Paz").build())
  //   .build()
  // const flightCode = airPort.getFlightCode(flight.flightDate.getDate(flight.flightDate), flight.destination)
  // res.status(200).send({flightCode})
})

createConnection().then(connection => {
  // here you can start to work with your entities
  const PORT = 3001;

  app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
  })

}).catch(error => console.log(error));