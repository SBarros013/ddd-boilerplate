import { StatusEnum } from "../../domain/entities/enums/status.enum";
import { User } from "../../domain/entities/user.entity";
import { IUserRepository } from "../../domain/repositories/user.repository.interface";
import { LogDTO } from "../dtos/log.dto";
import { UserDTO } from "../dtos/user.dto";
import { UserCreateDTO } from "../dtos/userCreate.dto";
import { UserService as UserDomainService } from "../../domain/services/user.domain.service";

export class UserService {

    private repository!: IUserRepository;
    private domainService!: UserDomainService;

    constructor(repository: IUserRepository, domainService: UserDomainService) {
        this.repository = repository;
        this.domainService = domainService;
    }


    async create(user: UserCreateDTO) {
        const userEntity = new User(user.name, user.name, user.password);

        const response = await this.repository.create(userEntity);

        return response;
    }

    async findAll() {
        const users = await this.repository.findAll();

        const dtos = users.map(u => new UserDTO(u.id, u.name, u.email, u.status));
        return dtos;
    }

    async find(id: string) {
        const u = await this.repository.find(id);

        return new UserDTO(u.id, u.name, u.email, u.status);
    }

    async findWithLogs(id: string) {
        const u = await this.repository.findWithLogs(id);

        return new UserDTO(u.id, u.name, u.email, u.status, u.logs as Array<LogDTO>);
    }

    async changeStatus(id: string, status: StatusEnum) {
        const u = await this.domainService.changeUserStatus(id, status);

        return new UserDTO(u.id, u.name, u.email, u.status, u.logs as Array<LogDTO>);
    }
}