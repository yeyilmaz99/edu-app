import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProgramState } from "./program.state";

export const PROGRAM_STATE = "programState";

const getProgramState = createFeatureSelector<ProgramState>(PROGRAM_STATE);

export const getInitialProgramsState = createSelector(getProgramState, (state) => {
    return state.programs;
})