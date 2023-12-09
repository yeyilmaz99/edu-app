import { Question } from "./question.model";

export interface ProgramForm{
    name:string;
    imageData:string;
    description:string;
    authorId:number;
    authorName:string;
    questions:Question[];
}