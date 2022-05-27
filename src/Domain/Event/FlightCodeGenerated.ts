import { DomainEvent } from '../../SharedKernel/Core/DomainEvent';
import { FlightCodeValue } from '../ValueObjects/FlightCode';

export class FlightCodeGenerated extends DomainEvent {
  flightId: string;
  code: FlightCodeValue;

  constructor(flightId: string, code: FlightCodeValue) {
    super(new Date());
    this.flightId = flightId;
    this.code = code;
  }
}
