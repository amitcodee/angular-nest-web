/* eslint-disable prettier/prettier */
// src/items/items.controller.ts
import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.entity';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async getAllItems(): Promise<Item[]> {  // Return type as Promise<Item[]>
    return await this.itemsService.getAllItems();
  }

  @Get(':id')
  async getItemById(@Param('id') id: string): Promise<Item> {  // Return type as Promise<Item>
    return await this.itemsService.getItemById(id);
  }

  @Post()
  async createItem(
    @Body('name') name: string,
    @Body('description') description: string,
  ): Promise<Item> {  // Return type as Promise<Item>
    return await this.itemsService.createItem(name, description);
  }

  @Patch(':id')
  async updateItem(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('description') description: string,
  ): Promise<Item> {  // Return type as Promise<Item>
    return await this.itemsService.updateItem(id, name, description);
  }

  @Delete(':id')
  async deleteItem(@Param('id') id: string): Promise<void> {  // Return type as Promise<void>
    await this.itemsService.deleteItem(id);
  }
}
