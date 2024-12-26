
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { inventoryReducer } from './store/inventory.reducer';
// import { InventoryEffects } from './store/inventory.effects';
// import { InventoryRoutingModule } from './inventory-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { ItemListComponent } from './components/item-list/item-list.component';
// import { ItemDetailComponent } from './components/item-detail/item-detail.component';
// import { AddItemComponent } from './components/add-item/add-item.component';
import { MatSelectModule } from '@angular/material/select';
import { inventoryReducer } from '../shared/store/inventory.reducer';
import { InventoryEffects } from '../shared/store/inventory.effects';

@NgModule({
  declarations: [
    // ItemListComponent,
    // ItemDetailComponent,
    // AddItemComponent
  ],
  imports: [
    CommonModule,
    // InventoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // Angular Material modules
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    // NgRx
    StoreModule.forFeature('inventory', inventoryReducer),
    EffectsModule.forFeature([InventoryEffects])
  ]
})
export class InventoryModule {}
