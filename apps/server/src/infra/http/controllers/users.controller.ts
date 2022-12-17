import { Body, Controller, Post } from '@nestjs/common'
import { CreateUser } from 'src/app/use-cases/create-user'

@Controller()
export class UsersController {
  constructor(private createUser: CreateUser) { }

  @Post('users')
  async create(@Body() body: any) {
    const { email, name, photo } = body

    const { } = await this.createUser.execute({
      email,
      name,
      photo
    })
  }
}
