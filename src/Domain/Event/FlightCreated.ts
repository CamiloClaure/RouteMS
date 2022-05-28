import { DomainEvent } from '../../SharedKernel/Core/DomainEvent';

export class FlightCreated extends DomainEvent {
  flightId: string;

  constructor(flightId: string) {
    super(new Date());
    this.flightId = flightId;
  }
}
