import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class UserEntity {
    constructor(data?: Partial<UserEntity>) {
        Object.assign(this, data);
    }

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        name: "username",
        type: "varchar",
        nullable: false,
    })
    username: string;

    @Column({
        name: "email",
        type: "varchar",
        nullable: false,
    })
    email: string;
}