import { FlightCodeGenerated } from '../../../Domain/Event/FlightCodeGenerated';
import { FlightCodeValue } from '../../../Domain/ValueObjects/FlightCode';

describe('Creating a FlightCodeGenerated', () => {
  test('should create FlightCodeGenerated', () => {
    const flightCodeGenerated = new FlightCodeGenerated(
      '123',
      new FlightCodeValue('CBBASCZ'),
    );
    expect(flightCodeGenerated).not.toBe(null);
    expect(flightCodeGenerated.flightId).toBe('123');
    expect(flightCodeGenerated.OccurredOn).toBeInstanceOf(Date);
  });
});
