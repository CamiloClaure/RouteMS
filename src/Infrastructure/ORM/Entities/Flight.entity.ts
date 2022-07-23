import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	Timestamp,
	OneToMany,
	PrimaryColumn,
	OneToOne,
	JoinColumn,
} from 'typeorm';
import { Route } from './Route.entity';

@Entity()
export class Flight {
	@PrimaryColumn('varchar', {
		length: 100,
	})
		id: string;

	@Column({ nullable: true })
		route: string;

	@Column({ nullable: true })
		departureDate: Date;

	@Column({ nullable: true })
		arrivalDate: Date;
}
