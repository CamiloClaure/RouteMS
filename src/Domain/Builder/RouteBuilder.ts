import { Flight } from '../Model/Flight/Flight';
import { DateValue } from '../../SharedKernel/ValueObjects/DateValue';
import { Route } from '../Model/Route/Route';
import { NameValue } from '../../SharedKernel/ValueObjects/NameValue';
export class RouteBuilder {
	private readonly _route: Route;

	constructor(route?: Route) {
		this._route = route ? route : new Route();
	}

	setName(name: string) {
		this._route.name = new NameValue(name);
		return this;
	}

	build(): Route {
		return this._route;
	}
}
