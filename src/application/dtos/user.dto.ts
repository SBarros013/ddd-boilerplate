import { StatusEnum } from "../../domain/entities/enums/status.enum";
import { LogDTO } from "./log.dto";

export class UserDTO {

    constructor(id: string, name: string, email: string, status: StatusEnum, logs?: Array<LogDTO>) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.status = status;
        this.logs = logs ?? [];
    }

    public id!: string;
    public name!: string;
    public email!: string;
    public status!: StatusEnum;
    public logs!: Array<LogDTO>
}