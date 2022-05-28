import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightController } from './WebApi/Controllers/flight.controller';
import { CreateFlightCommandFactory } from './Application/UseCases/Command/CreateFlightCommand/CreateFlightCommandFactory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightRepository } from './Infrastructure/ORM/Repository/FlightRepository';
import { CRUDCommandFactory } from './Application/UseCases/Command/CRUDCommandHandler/CRUDFlightFactory';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, FlightController],
  providers: [
    AppService,
    CreateFlightCommandFactory,
    { useClass: FlightRepository, provide: 'IFlightRepository' },
  ],
})
export class AppModule {}
