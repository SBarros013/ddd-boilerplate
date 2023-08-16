import { Log } from "../entities/log.entity";
import { IBaseRepository } from "./base.repository.interface";

export interface ILogRepository extends IBaseRepository<Log> {
}