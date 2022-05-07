import {Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany, PrimaryColumn} from "typeorm";
import {CommonEntity} from "./CommonEntity";

@Entity()
export class Route extends CommonEntity{
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

