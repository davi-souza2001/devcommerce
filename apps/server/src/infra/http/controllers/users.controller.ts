import { Body, Controller, Post } from '@nestjs/common'
import { UserCases } from 'src/app/use-cases/User-use-cases'

@Controller()
export class UsersController {
  constructor(private useCases: UserCases) { }

  @Post('user/create')
  async create(@Body() body: any) {
    const { email, name, photo } = body

    await this.useCases.create({
      email,
      name,
      photo
    })
  }

  @Post('user/login')
  async login(@Body() body: any) {
    const email = body.email

    return await this.useCases.login(email)
  }
}
