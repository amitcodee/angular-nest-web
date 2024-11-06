// src/items/items.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { Item } from './item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  providers: [ItemsService],
  controllers: [ItemsController],
})
export class ItemsModule {}
