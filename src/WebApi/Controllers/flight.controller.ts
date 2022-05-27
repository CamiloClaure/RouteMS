import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateFlightCommandFactory } from '../../Application/UseCases/Command/CreateFlightCommand/CreateFlightCommandFactory';
import { FlightDto } from '../../Application/Dto/FligthDto';
import { Connection, getManager } from 'typeorm';

@Controller('flight')
export class FlightController {
  constructor(
    private readonly createFlightCommandFactory: CreateFlightCommandFactory<any>, private connection: Connection
  ) {}

  @Post()
  createFlight(@Body() flightDto: FlightDto): any {
    const commandConfig = {
      commandName: 'CreateFlightCommand',
      args: flightDto,
    };
    const command = this.createFlightCommandFactory.makeCommand(commandConfig);
    console.log(command);
    command
      .execute()
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
}
