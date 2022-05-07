import {Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany} from "typeorm";
import {RouteDetail} from "./RouteDetail";

@Entity()
export class Route {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    enabled: boolean

    @Column({ nullable: true })
    totalDistance: number

    @Column({ nullable: true })
    totalDuration: number

    @OneToMany(() => RouteDetail, (route) => route.route)
    routeDetails: RouteDetail[]
}

