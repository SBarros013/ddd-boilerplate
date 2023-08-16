import { Request, Response } from 'express';

import { UserService } from "../../application/services/user.application.service";
import { UserCreateDTO } from '../../application/dtos/userCreate.dto';

export class UserController {
    private service: UserService;
    
    constructor(userService: UserService) {
        this.service = userService;
    }

    async create(req: Request, res: Response) {
        const userDto: UserCreateDTO = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        };

        const response = await this.service.create(userDto);

        res.json({
            success: true,
            response
        });
    }

    async findAll(req: Request, res: Response) {
        const response = await this.service.findAll();

        res.json({
            succes: true,
            response
        })
    }

    async find(req: Request, res: Response) {
        const response = await this.service.find(req.params.id);

        res.json({
            success: true,
            response
        })
    }

    async changeStatus(req: Request, res: Response) {
        const response = await this.service.changeStatus(req.params.id, req.body.status);

        res.json({
            success: true,
            response
        })
    }
}