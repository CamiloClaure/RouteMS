import {PrimaryColumn} from "typeorm";

export class GenericEntity {
    @PrimaryColumn("varchar", {
        length: 100
    })
    id: string;
}