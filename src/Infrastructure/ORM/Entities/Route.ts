import {Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany, PrimaryColumn} from "typeorm";
import {GenericEntity} from "./GenericEntity";

@Entity()
export class Route extends GenericEntity{
    constructor(id: string) {
        super();
        this.id = id
    }

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    enabled: boolean

    @Column({ nullable: true })
    totalDistance: number

    @Column({ nullable: true })
    totalDuration: number

}

