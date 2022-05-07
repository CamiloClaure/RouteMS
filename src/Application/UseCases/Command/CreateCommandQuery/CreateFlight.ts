import {FlightRepository} from "../../../../Infrastructure/ORM/Repository/FlightRepository";
import {Flight} from "../../../../Domain/Model/Flight/Flight";


export class CreateFlight<ICommand> {
    private flight:Flight;

    constructor(flight:Flight) {
        this.flight = flight
    }

    public execute = async () => {

        // TODO inyectar el repository
        const flightRepository = new FlightRepository();
        // TODO agregar builder para flight
        let flight = new Flight()

        for (let key of Object.keys(this.flight)) {
            flight[key] = this.flight[key]
        }


        const status = await flightRepository.createFlight(flight);

        return { status }
    }
}
