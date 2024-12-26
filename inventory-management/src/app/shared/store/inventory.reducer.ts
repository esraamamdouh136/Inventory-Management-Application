
import { createReducer, on } from '@ngrx/store';
import * as InventoryActions from './inventory.actions';
import { Item } from '../models/item.model';

export interface InventoryState {
  items: Item[];
  loading: boolean;
  error: any;
}

export const initialState: InventoryState = {
  items: [],
  loading: false,
  error: null
};

export const inventoryReducer = createReducer(
  initialState,

  // Load items
  on(InventoryActions.loadItems, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(InventoryActions.loadItemsSuccess, (state, { items }) => ({
    ...state,
    items,
    loading: false
  })),
  on(InventoryActions.loadItemsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // Add item
  on(InventoryActions.addItem, (state) => ({
    ...state,
    loading: true
  })),
  on(InventoryActions.addItemSuccess, (state, { item }) => ({
    ...state,
    loading: false,
    items: [...state.items, item]
  })),
  on(InventoryActions.addItemFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // Update item
  on(InventoryActions.updateItem, (state) => ({
    ...state,
    loading: true
  })),
  on(InventoryActions.updateItemSuccess, (state, { item }) => {
    const updatedItems = state.items.map((i) =>
      i.id === item.id ? { ...item } : i
    );
    return {
      ...state,
      loading: false,
      items: updatedItems
    };
  }),
  on(InventoryActions.updateItemFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
