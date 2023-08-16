import { PrismaClient } from "@prisma/client";
import { BaseRepository } from "./base.repository";
import { Log } from "../../domain/entities/log.entity";
import { ILogRepository } from "../../domain/repositories/log.repository.interface";

export class LogRepository extends BaseRepository implements ILogRepository {
    private entity;

    constructor() {
        super();
        this.entity = new PrismaClient().log;
    }

    async find(id: string) {
        return (await this.entity.findFirst({
            where: {
                id
            }
        })) as Log;
    };

    async create(entity: Log) {
        return (await this.entity.create({
            data: {
                from: entity.from,
                to: entity.to,
                userId: entity.userId
            } 
        }) as Log);
    };
    
    async findAll() {
        return (await this.entity.findMany() as Array<Log>);
    }
}