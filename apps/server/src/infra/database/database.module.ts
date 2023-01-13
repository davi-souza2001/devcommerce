import { Module } from "@nestjs/common";
import { AvatarRepository } from "src/app/repositories/avatar-repositories";
import { UserRepository } from "src/app/repositories/user-repositories";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaAvatarRepository } from "./prisma/repositories/prisma-avatar-repositories";
import { PrismaUsersRepository } from "./prisma/repositories/prisma-users-repositories";

@Module({
	providers: [
		PrismaService,
		{
			provide: UserRepository,
			useClass: PrismaUsersRepository
		},
		{
			provide: AvatarRepository,
			useClass: PrismaAvatarRepository
		}
	],
	exports: [
		UserRepository,
		AvatarRepository
	]
})
export class DatabaseModule { }
