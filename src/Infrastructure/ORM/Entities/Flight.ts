import {Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany} from "typeorm";
import {RouteDetail} from "./RouteDetail";

@Entity()
export class Flight {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({ nullable: true })
    route: number;

    @Column({ nullable: true })
    departureDate: Timestamp;

    @Column({ nullable: true })
    arrivalDate: Timestamp;


}

