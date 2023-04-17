import { Controller, Get } from '@nestjs/common';
import { Heroes } from './heroes.interface';

@Controller()
export class HeroesService {
  private readonly heroes: Heroes[] = [];

  @Get()
  findAll(): Heroes[] {
    return this.heroes;
  }
}
