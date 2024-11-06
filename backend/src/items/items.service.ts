/* eslint-disable prettier/prettier */
// src/items/items.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async getAllItems(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  async getItemById(id: string): Promise<Item> {
    return this.itemRepository.findOneBy({ id });
  }

  async createItem(name: string, description: string): Promise<Item> {
    const item = this.itemRepository.create({ name, description });
    return this.itemRepository.save(item);
  }

  async updateItem(id: string, name: string, description: string): Promise<Item> {
    const item = await this.getItemById(id);
    if (item) {
      item.name = name;
      item.description = description;
      return this.itemRepository.save(item);
    }
    return null;
  }

  async deleteItem(id: string): Promise<void> {
    await this.itemRepository.delete(id);
  }
}
