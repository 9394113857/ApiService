// src/app/items/items.component.ts

import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any[] = [];
  newItem: any = { name: '', description: '' };

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  addItem(): void {
    this.itemService.createItem(this.newItem).subscribe(data => {
      this.items.push(data.item);
      this.newItem = { name: '', description: '' };
    });
  }

  updateItem(id: number, name: string, description: string): void {
    this.itemService.updateItem(id, { name, description }).subscribe(data => {
      const index = this.items.findIndex(item => item.id === id);
      if (index !== -1) {
        this.items[index] = data.item;
      }
    });
  }

  deleteItem(id: number): void {
    this.itemService.deleteItem(id).subscribe(() => {
      this.items = this.items.filter(item => item.id !== id);
    });
  }
}
