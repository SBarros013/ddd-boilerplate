import { StatusEnum } from "../../domain/entities/enums/status.enum";

export class LogDTO {
    public from!: StatusEnum;
    public to!: StatusEnum;
    public createdAt!: Date;
}