import { Module } from '@nestjs/common'
import { UserCases } from 'src/app/use-cases/User-use-cases';
import { DatabaseModule } from '../database/database.module';
import { UsersController } from './controllers/users.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [UserCases]
})

export class HttpModule { }