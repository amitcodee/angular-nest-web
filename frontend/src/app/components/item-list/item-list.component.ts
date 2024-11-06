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
  items: any[] = [];
  itemForm!: FormGroup;
  editMode: boolean = false;
  editItemId: string | null = null;

  constructor(
    private itemService: ItemService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadItems();
    this.initializeForm();
  }

  loadItems() {
    this.itemService.getAllItems().subscribe((items) => (this.items = items));
  }

  initializeForm() {
    this.itemForm = this.fb.group({
      name: [''],
      description: [''],
    });
  }

  createOrUpdateItem() {
    const { name, description } = this.itemForm.value;
    if (this.editMode && this.editItemId) {
      // Update item
      this.itemService.updateItem(this.editItemId, name, description).subscribe(() => {
        this.loadItems();
        this.cancelEdit();
      });
    } else {
      // Create new item
      this.itemService.createItem(name, description).subscribe(() => {
        this.loadItems();
        this.itemForm.reset();
      });
    }
  }

  enableEditMode(item: any) {
    this.editMode = true;
    this.editItemId = item.id;
    this.itemForm.patchValue({
      name: item.name,
      description: item.description,
    });
  }

  cancelEdit() {
    this.editMode = false;
    this.editItemId = null;
    this.itemForm.reset();
  }

  deleteItem(id: string) {
    this.itemService.deleteItem(id).subscribe(() => this.loadItems());
  }
}
