import { BaseEntity } from "./base.entity";
import { StatusEnum } from "./enums/status.enum";
import { Log } from "./log.entity";

export class User extends BaseEntity {

    constructor(id?: string, name?: string, email?: string, password?: string, status?: StatusEnum, logs?: Array<Log>) {
        super();
        this.id = id ?? "";
        this.name = name ?? "";
        this.email = email ?? "";
        this.password = password ?? "";
        this.status = status ?? StatusEnum.Registered;
        this.logs = logs ?? [];
    }

    public name!: string;
    public email!: string;
    public password!: string;
    public status!: StatusEnum;
    public logs!: Array<Log>;

    async changeUserStatus(newStatus: StatusEnum) {
        const log = new Log(this.status, newStatus, this.id);
        this.logs.push(log);
        this.status = newStatus;
        return log;
    }
}