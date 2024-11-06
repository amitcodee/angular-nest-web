/* eslint-disable prettier/prettier */
// src/items/items.service.ts
import { Injectable } from '@nestjs/common';
import { Item } from './item.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  getAllItems(): Item[] {
    return this.items;
  }

  getItemById(id: string): Item {
    return this.items.find(item => item.id === id);
  }

  createItem(name: string, description: string): Item {
    const item: Item = { id: uuid(), name, description };
    this.items.push(item);
    return item;
  }

  // src/items/items.service.ts
updateItem(id: string, name: string, description: string): Item {
  const item = this.getItemById(id);
  if (item) {
    item.name = name;
    item.description = description;
  }
  return item;
}


  deleteItem(id: string): void {
    this.items = this.items.filter(item => item.id !== id);
  }
}
