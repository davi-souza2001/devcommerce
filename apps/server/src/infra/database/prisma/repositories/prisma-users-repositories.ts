import { Injectable } from "@nestjs/common/decorators";
import { User } from "src/app/entities/user";
import { UserRepository } from "src/app/repositories/user-repositories";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaUsersRepository implements UserRepository {
    constructor(private prismaService: PrismaService) { }

    async create(user: User): Promise<void> {
        await this.prismaService.user.create({
            data: {
                id: user.id,
                name: user.name,
                email: user.email,
                photo: user.photo
            }
        })
    }

}