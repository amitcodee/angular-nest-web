import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemListComponent } from "./components/item-list/item-list.component";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemListComponent,HttpClientModule,ReactiveFormsModule],
  providers: [ItemService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
