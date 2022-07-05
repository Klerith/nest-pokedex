import { Module } from '@nestjs/common';
import { CommonModule } from './../common/common.module';
import { PokemonModule } from './../pokemon/pokemon.module';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    PokemonModule,
    CommonModule,
  ]
})
export class SeedModule {}
