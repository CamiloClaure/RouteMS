import {PrimaryColumn} from "typeorm";

export class CommonEntity {
    @PrimaryColumn("varchar", {
        length: 100
    })
    id: string;
}