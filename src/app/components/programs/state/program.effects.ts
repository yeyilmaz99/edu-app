import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
@Injectable()
export class ProgramEffects {
    constructor(
        private actions$:Actions,
        private store: Store<AppState>, 
    ){    }
}

