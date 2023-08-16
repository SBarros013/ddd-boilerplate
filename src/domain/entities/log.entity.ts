import { BaseEntity } from "./base.entity";
import { StatusEnum } from "./enums/status.enum";
import { User } from "./user.entity";

export class Log extends BaseEntity {

    constructor(from: StatusEnum, to: StatusEnum, userId: string) {
        super();
        this.from = from;
        this.to = to;
        this.userId = userId;
        this.createdAt = new Date();
    }

    public from!: StatusEnum;
    public to!: StatusEnum;
    public userId!: string;
    public User!: User;
}