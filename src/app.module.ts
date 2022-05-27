import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightController } from './WebApi/Controllers/flight.controller';
import { CreateFlightCommandFactory } from './Application/UseCases/Command/CreateFlightCommand/CreateFlightCommandFactory';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, FlightController],
  providers: [AppService, CreateFlightCommandFactory],
})
export class AppModule {}
