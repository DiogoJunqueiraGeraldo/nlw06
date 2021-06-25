import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuidv4 } from "uuid";

@Entity("tags")
class Tag {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  constructor() {
    // Create Operation
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export default Tag;
