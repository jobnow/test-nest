import { Controller, Get } from '@nestjs/common';
import { Heroes } from './heroes.interface';
import { HeroesService } from './app.service';

@Controller()
export class HeroesController {
  constructor(private heroesService: HeroesService) {}

  @Get()
  async findAll(): Promise<Heroes[]> {
    return this.heroesService.findAll();
  }
}
