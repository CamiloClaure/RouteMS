import { IFlightRepository } from '../../../Domain/Repositories/IFlightRepository';
import { Flight as FlightDomain } from '../../../Domain/Model/Flight/Flight';
import { Flight } from '../Entities/Flight.entity';
import { getManager } from 'typeorm';
import { Route } from '../Entities/Route.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FlightRepository implements IFlightRepository {
  CreateAsync(obj: any): Promise<any> {
    return Promise.resolve(undefined);
  }

  FindByIdAsync(id: any): Promise<any> {
    return Promise.resolve(undefined);
  }

  createFlight(flightDomain: FlightDomain): Promise<any> {
    // TODO abstraer la conexion cosa que quede funcion tipo new Model("Flight"); model.save(flight)
    // la logica del constructor tiene la instanciacion del repositorio objetivo
    const flight = new Flight();
    flight.id = flightDomain.id;
    flight.route = new Route(flightDomain.route.id).id;
    flight.arrivalDate = flightDomain.arrivalDate.date;
    flight.departureDate = flightDomain.departureDate.date;
    const status = getManager()
      .getRepository('Flight')
      .save(flight)
      .then((flight) => {
        return flight.id;
      })
      .catch((err) => {
        return null;
      });
    return Promise.resolve(status);
  }

  removeFlight(flight: FlightDomain): Promise<any> {
    return Promise.resolve(undefined);
  }

  updateFlight(flight: FlightDomain): Promise<any> {
    return Promise.resolve(undefined);
  }
}
