import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CommonEntityEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
