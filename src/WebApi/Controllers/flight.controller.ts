import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateFlightCommandFactory } from '../../Application/UseCases/Command/CreateFlightCommand/CreateFlightCommandFactory';
import { FlightDto } from '../../Application/Dto/FligthDto';
import { Connection, getManager } from 'typeorm';

@Controller('flight')
export class FlightController {
  constructor(
    private readonly createFlightCommandFactory: CreateFlightCommandFactory<any>,
  ) {}

  @Post()
  createFlight(@Body() flightDto: FlightDto): any {
    const commandConfig = {
      commandName: 'CreateFlightCommand',
      args: flightDto,
    };
    const command = this.createFlightCommandFactory.makeCommand(commandConfig);
    return command
      .execute()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
}
