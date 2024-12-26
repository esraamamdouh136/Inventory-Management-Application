
import { createAction, props } from '@ngrx/store';
import { Item } from '../models/item.model';

// Load items
export const loadItems = createAction('[Inventory] Load Items');
export const loadItemsSuccess = createAction(
  '[Inventory] Load Items Success',
  props<{ items: Item[] }>()
);
export const loadItemsFailure = createAction(
  '[Inventory] Load Items Failure',
  props<{ error: any }>()
);

// Add item
export const addItem = createAction(
  '[Inventory] Add Item',
  props<{ item: Item }>()
);
export const addItemSuccess = createAction(
  '[Inventory] Add Item Success',
  props<{ item: Item }>()
);
export const addItemFailure = createAction(
  '[Inventory] Add Item Failure',
  props<{ error: any }>()
);

// Update item
export const updateItem = createAction(
  '[Inventory] Update Item',
  props<{ item: Item }>()
);
export const updateItemSuccess = createAction(
  '[Inventory] Update Item Success',
  props<{ item: Item }>()
);
export const updateItemFailure = createAction(
  '[Inventory] Update Item Failure',
  props<{ error: any }>()
);
