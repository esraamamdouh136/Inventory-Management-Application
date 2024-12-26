
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InventoryState } from './inventory.reducer';

export const selectInventoryState = createFeatureSelector<InventoryState>('inventory');

export const selectItems = createSelector(
  selectInventoryState,
  (state: InventoryState) => state.items
);

export const selectLoading = createSelector(
  selectInventoryState,
  (state: InventoryState) => state.loading
);

export const selectError = createSelector(
  selectInventoryState,
  (state: InventoryState) => state.error
);
