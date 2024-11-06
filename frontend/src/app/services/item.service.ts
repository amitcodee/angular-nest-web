// src/app/services/item.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = 'http://localhost:3000/items';

  constructor(private http: HttpClient) {}

  getAllItems(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getItemById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createItem(name: string, description: string): Observable<any> {
    return this.http.post(this.apiUrl, { name, description });
  }

// src/app/services/item.service.ts
updateItem(id: string, name: string, description: string): Observable<any> {
  return this.http.patch(`${this.apiUrl}/${id}`, { name, description });
}

deleteItem(id: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`);
}

}
