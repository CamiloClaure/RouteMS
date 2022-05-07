import {Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne} from "typeorm";
import {Route} from "./Route";

@Entity()
export class RouteDetail {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({ nullable: true })
    hierarchy: number;

    @Column({ nullable: true })
    distance: number

    @Column({ nullable: true })
    origin: number

    @Column({ nullable: true })
    Destination: number

    @Column({ nullable: true })
    duration: number

    @ManyToOne(() => Route, (route) => route.routeDetails)
    route: Route
}

