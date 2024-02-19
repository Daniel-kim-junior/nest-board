import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'boards',
})
export class BoardsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index('title', {
    fulltext: true,
    unique: false,
  })
  @Column()
  title: string;
}
