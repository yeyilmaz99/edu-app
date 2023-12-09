import { Program } from "src/app/models/program.model"

export interface ProgramState {
    programs: Program[]
}

export const initialState: ProgramState = {
    // programs: [
    //     {
    //         programId: 1, questions: [
    //             { id: 1, question: "this is question text 1", options: ['A', 'B', 'C', 'D'], answer: 'A', questionSubtext: "this is question subText 1" },
    //             { id: 2, question: "this is question text 2", options: ['A', 'B', 'C', 'D'], answer: 'B', questionSubtext: "this is question subText 2" },
    //             { id: 3, question: "this is question text 3", options: ['A', 'B', 'C', 'D'], answer: 'C', questionSubtext: "this is question subText 3" },
    //             { id: 4, question: "this is question text 4", options: ['A', 'B', 'C', 'D'], answer: 'D', questionSubtext: "this is question subText 4" },
    //             { id: 5, question: "this is question text 5", options: ['A', 'B', 'C', 'D'], answer: 'A', questionSubtext: "this is question subText 5" },
    //             { id: 6, question: "this is question text 6", options: ['A', 'B', 'C', 'D'], answer: 'B', questionSubtext: "this is question subText 6" }
    //         ]
    //     },
    //     {
    //         programId: 2, questions: [
    //             { id: 1, question: "this is question text 1", options: ['A', 'B', 'C', 'D'], answer: 'A', questionSubtext: "this is question subText 1" },
    //             { id: 2, question: "this is question text 2", options: ['A', 'B', 'C', 'D'], answer: 'B', questionSubtext: "this is question subText 2" },
    //             { id: 3, question: "this is question text 3", options: ['A', 'B', 'C', 'D'], answer: 'C', questionSubtext: "this is question subText 3" },
    //             { id: 4, question: "this is question text 4", options: ['A', 'B', 'C', 'D'], answer: 'D', questionSubtext: "this is question subText 4" },
    //             { id: 5, question: "this is question text 5", options: ['A', 'B', 'C', 'D'], answer: 'A', questionSubtext: "this is question subText 5" },
    //             { id: 6, question: "this is question text 6", options: ['A', 'B', 'C', 'D'], answer: 'B', questionSubtext: "this is question subText 6" }
    //         ]
    //     },
    //     {
    //         programId: 3, questions: [
    //             { id: 1, question: "this is question text 1", options: ['A', 'B', 'C', 'D'], answer: 'A', questionSubtext: "this is question subText 1" },
    //             { id: 2, question: "this is question text 2", options: ['A', 'B', 'C', 'D'], answer: 'B', questionSubtext: "this is question subText 2" },
    //             { id: 3, question: "this is question text 3", options: ['A', 'B', 'C', 'D'], answer: 'C', questionSubtext: "this is question subText 3" },
    //             { id: 4, question: "this is question text 4", options: ['A', 'B', 'C', 'D'], answer: 'D', questionSubtext: "this is question subText 4" },
    //             { id: 5, question: "this is question text 5", options: ['A', 'B', 'C', 'D'], answer: 'A', questionSubtext: "this is question subText 5" },
    //             { id: 6, question: "this is question text 6", options: ['A', 'B', 'C', 'D'], answer: 'B', questionSubtext: "this is question subText 6" }
    //         ]
    //     },

    // ]
    programs:null

}