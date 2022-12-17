import { Module } from '@nestjs/common'
import { CreateUser } from 'src/app/use-cases/create-user';
import { DatabaseModule } from '../database/database.module';
import { UsersController } from './controllers/users.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [CreateUser]
})

export class HttpModule { }