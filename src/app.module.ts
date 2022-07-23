import { Module } from '@nestjs/common';
import { FlightController } from './WebApi/Controllers/flight.controller';
import { CreateFlightCommandFactory } from './Application/UseCases/Command/CreateFlightCommand/CreateFlightCommandFactory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightRepository } from './Infrastructure/ORM/Repository/FlightRepository';
import { CRUDCommandFactory } from './Application/UseCases/Command/CRUDCommandHandler/CRUDFlightFactory';
import { RouteService } from './Application/Services/RouteService';
import { FlightService } from './Application/Services/FlightService';
import { RouteRepository } from './Infrastructure/ORM/Repository/RouteRepository';

@Module({
	imports: [TypeOrmModule.forRoot()],
	controllers: [FlightController],
	providers: [RouteService, FlightService, RouteRepository, CreateFlightCommandFactory, FlightRepository],
})
export class AppModule {}
