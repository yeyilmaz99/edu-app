import { Question } from "./question.model";

export interface Program{
    programId:number;
    questions:Question[];
}