import {FlightDto} from "../../Application/Dto/FligthDto";
import {
    CreateFlightCommandFactory
} from "../../Application/UseCases/Command/CreateFlightCommand/CreateFlightCommandFactory";
import {CreateFlightCommand} from "../../Application/UseCases/Command/CreateFlightCommand/CreateFlightCommand";

var express = require('express')
var routeControllerRouter = express.Router()


routeControllerRouter.post('/', (req, res, next) => {
    res.status(501).send("Method not implemented")
})

routeControllerRouter.get('/', (req, res, next) => {
    res.status(501).send("Method not implemented")
})

routeControllerRouter.put('/', (req, res, next) => {
    res.status(501).send("Method not implemented")
})

routeControllerRouter.delete('/', (req, res, next) => {
    res.status(501).send("Method not implemented")
})


export default routeControllerRouter
