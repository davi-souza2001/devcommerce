import { Module } from '@nestjs/common'
import { AvatarCases } from 'src/app/use-cases/Avatar-use-cases';
import { UserCases } from 'src/app/use-cases/User-use-cases';
import { DatabaseModule } from '../database/database.module';
import { AvatarController } from './controllers/avatar.controller';
import { UsersController } from './controllers/users.controller';

@Module({
	imports: [DatabaseModule],
	controllers: [UsersController, AvatarController],
	providers: [UserCases, AvatarCases]
})

export class HttpModule { }
