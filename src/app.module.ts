import { Module } from '@nestjs/common';
import { FlightController } from './WebApi/Controllers/flight.controller';
import { CreateFlightCommandFactory } from './Application/UseCases/Command/CreateFlightCommand/CreateFlightCommandFactory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightRepository } from './Infrastructure/ORM/Repository/FlightRepository';
import { CRUDCommandFactory } from './Application/UseCases/Command/CRUDCommandHandler/CRUDFlightFactory';
import { RouteService } from './Application/Services/RouteService';
import { FlightService } from './Application/Services/FlightService';
import { RouteRepository } from './Infrastructure/ORM/Repository/RouteRepository';
import * as fs from 'fs';
import * as path from 'path';
@Module({
	imports: [TypeOrmModule.forRoot({
		type: "postgres",
		host: "db-postgresql-nyc1-96651-do-user-12454790-0.b.db.ondigitalocean.com",
		port: 25060,
		username: "doadmin",
		password: "AVNS_CN9Jp0ogwNX5Vnmr36y",
		database: "defaultdb",
		entities: ["dist/Infrastructure/ORM/Entities/**/*.js"],
		synchronize: true,
		migrations: ["src/persistance/migrations/*.js"],
		migrationsTableName: "custom_migration_table",
		logging: false,
		ssl: {
			ca: fs
				.readFileSync(path.join(__dirname, '../src/ca-certificate.crt'))
				.toString()
		}
	})],
	controllers: [FlightController],
	providers: [RouteService, FlightService, RouteRepository, CreateFlightCommandFactory, FlightRepository],
})
export class AppModule {}
