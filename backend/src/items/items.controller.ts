/* eslint-disable prettier/prettier */
// src/items/items.controller.ts
import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.model';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  getAllItems(): Item[] {
    return this.itemsService.getAllItems();
  }

  @Get(':id')
  getItemById(@Param('id') id: string): Item {
    return this.itemsService.getItemById(id);
  }

  @Post()
  createItem(@Body('name') name: string, @Body('description') description: string): Item {
    return this.itemsService.createItem(name, description);
  }
// src/items/items.controller.ts
@Patch(':id')
updateItem(
  @Param('id') id: string,
  @Body('name') name: string,
  @Body('description') description: string
): Item {
  return this.itemsService.updateItem(id, name, description);
}


  @Delete(':id')
  deleteItem(@Param('id') id: string): void {
    this.itemsService.deleteItem(id);
  }
}
