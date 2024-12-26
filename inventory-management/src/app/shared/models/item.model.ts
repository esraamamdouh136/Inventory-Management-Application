// src/app/inventory/models/item.model.ts

export interface Item {
    id: number;
    name: string;
    category: string;
    stockQuantity: number;
    lastUpdated: Date;
  }
  