import { UserService } from "../../application/services/user.application.service";
import { UserRepository } from "../../infra/repositories/user.repository"
import { UserController } from "../controllers/user.controller";
import { UserService as UserDomainService } from "../../domain/services/user.domain.service";
import { LogRepository } from "../../infra/repositories/log.repository";

export const makeUserController = () => {
    const userRepository = new UserRepository();
    const logRepository = new LogRepository();
    const userDomainService = new UserDomainService(userRepository, logRepository);
    const userService = new UserService(userRepository, userDomainService);
    return new UserController(userService);
}