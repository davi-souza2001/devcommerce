import { Body, Controller, Get, Post } from '@nestjs/common'
import { AppService } from './app.service'
import { PrismaService } from './prisma.service'
import { randomUUID } from 'node:crypto'

@Controller()
export class AppController {
  constructor(private readonly appService: PrismaService) { }

  @Get('users')
  list() {
    return this.appService.user.findMany()
  }

  @Post('users')
  async create(@Body() body: any) {
    const { email, name, photo } = body

    await this.appService.user.create({
      data: {
        id: randomUUID(),
        email,
        name,
        photo
      }
    })
  }
}
