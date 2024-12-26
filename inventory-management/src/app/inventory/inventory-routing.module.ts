// src/app/inventory/inventory-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ItemListComponent } from './components/item-list/item-list.component';
// import { ItemDetailComponent } from './components/item-detail/item-detail.component';
// import { AddItemComponent } from './components/add-item/add-item.component';

const routes: Routes = [
//   { path: 'inventory', component: ItemListComponent },
//   { path: 'inventory/add', component: AddItemComponent },
//   { path: 'inventory/:id', component: ItemDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule {}
