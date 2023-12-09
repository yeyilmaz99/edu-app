import { createReducer, on } from "@ngrx/store";
import { initialState } from "./program.state";


const _programReducer = createReducer(initialState)


    export function programReducer(state:any, action:any){
        return _programReducer(state,action);
    }