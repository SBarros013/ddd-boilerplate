import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export const index = async (req: Request, res: Response) => {
    const user = await prisma.users.create({
        data: {
            name: "Naian Barros",
            email: "naian@mailinator.com",
            password: "123456"
        }
    });

    res.json(user);
}

export const find = async (req: Request, res: Response) => {
    const user = await prisma.users.findFirst({
        where: {
            email: "naian@mailinator.com"
        }
    });

    res.json(user);
}