import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @ApiTags('Seed')
  @Get()
  runSeed() {
    return this.seedService.runSeed();
  }
}
