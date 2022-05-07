import {FlightDto} from "../../Application/Dto/FligthDto";
import {
    CreateFlightCommandFactory
} from "../../Application/UseCases/Command/CreateFlightCommand/CreateFlightCommandFactory";
import {CreateFlightCommand} from "../../Application/UseCases/Command/CreateFlightCommand/CreateFlightCommand";

var express = require('express')
var flightRouter = express.Router()

const createFlightCommandFactory = new CreateFlightCommandFactory()

flightRouter.post('/', (req, res, next) => {
    const flightDto: FlightDto = req.body;
    const commandConfig = {
        commandName: "CreateFlightCommand",
        args: flightDto
    }
    const command = createFlightCommandFactory.makeCommand(commandConfig)
    command.execute().then(result => {
        const statusCode = result.status ? 200 : 500;
        res.status(statusCode).send(result)
    });


})


export default flightRouter
