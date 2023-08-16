import { User } from "../../domain/entities/user.entity";
import { IUserRepository } from "../../domain/repositories/user.repository.interface";
import { StatusEnum } from "../entities/enums/status.enum";
import { ILogRepository } from "../repositories/log.repository.interface";

export class UserService {

    private userRepository!: IUserRepository;
    private logRepository!: ILogRepository;

    constructor(userRepository: IUserRepository, logRepository: ILogRepository) {
        this.userRepository = userRepository;
        this.logRepository = logRepository;
    }


    async changeUserStatus(userId: string, status: StatusEnum) {
        const u = await this.userRepository.findWithLogs(userId);

        const log = await u.changeUserStatus(status);

        await this.userRepository.updateStatus(userId, status);
        await this.logRepository.create(log);

        return u;
    }
}