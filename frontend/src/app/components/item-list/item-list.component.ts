import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  itemForm!: FormGroup;

  constructor(
    private itemService: ItemService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.itemForm = this.fb.group({
      name: [''],
      description: [''],
    });
  }

  createItem() {
    const { name, description } = this.itemForm.value;
    this.itemService.createItem(name, description).subscribe(() => {
      this.itemForm.reset();
    });
  }

  deleteItem(id: string) {
    this.itemService.deleteItem(id).subscribe(() => this.loadItems());
  }

  loadItems() {
    // Implementation for loading items
  }

}
