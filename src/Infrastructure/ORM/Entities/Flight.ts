import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Timestamp,
    OneToMany,
    PrimaryColumn,
    OneToOne,
    JoinColumn
} from "typeorm";
import {Route} from "./Route";

@Entity()
export class Flight {

    @PrimaryColumn("varchar", {
        length: 100
    })
    id: string;

    @OneToOne(() => Route)
    @JoinColumn()
    route: Route

    @Column({ nullable: true })
    departureDate: Date;

    @Column({ nullable: true })
    arrivalDate: Date;

}

