
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as InventoryActions from './inventory.actions';
import { InventoryService } from '../../core/services/inventory.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class InventoryEffects {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InventoryActions.loadItems),
      mergeMap(() =>
        this.inventoryService.getItems().pipe(
          map((items) => InventoryActions.loadItemsSuccess({ items })),
          catchError((error) => of(InventoryActions.loadItemsFailure({ error })))
        )
      )
    )
  );

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InventoryActions.addItem),
      mergeMap((action) =>
        this.inventoryService.addItem(action.item).pipe(
          map((createdItem) => InventoryActions.addItemSuccess({ item: createdItem })),
          catchError((error) => of(InventoryActions.addItemFailure({ error })))
        )
      )
    )
  );

  updateItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InventoryActions.updateItem),
      mergeMap((action) =>
        this.inventoryService.updateItem(action.item).pipe(
          map((updatedItem) => InventoryActions.updateItemSuccess({ item: updatedItem })),
          catchError((error) => of(InventoryActions.updateItemFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private inventoryService: InventoryService
  ) {}
}
