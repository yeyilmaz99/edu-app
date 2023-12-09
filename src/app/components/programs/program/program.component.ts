import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  selectedAnswer: string = "";
  isQuestionAnswered:boolean = false;
  correctAnswer:string ="";
  displayedQuestions: any[] = [];
  quizQuestions: any[] = [
    { id: 1, question: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam ', options: ['A', 'B', 'C', 'D'], answer: 'A' },
    { id: 2, question: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam', options: ['A', 'B', 'C', 'D'], answer: 'C' },
    { id: 3, question: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. AperiamLorem, ipsum dolor sit amet ', options: ['A', 'B', 'C', 'D'], answer: 'A' },
    { id: 4, question: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam', options: ['A', 'B', 'C', 'D'], answer: 'A' },
    { id: 5, question: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. AperiamLorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam', options: ['A', 'B', 'C', 'D'], answer: 'A' },
    { id: 6, question: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperdolor sit amet consectetur adipisicing elit. AperiamLorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam', options: ['A', 'B', 'C', 'D'], answer: 'D' },
  ];

  pageSize: number = 1;


  constructor() {
  }

currentQuestionIndex: number = 0;
currentQuestion: any;

ngOnInit(): void {
  this.loadQuestion(this.currentQuestionIndex);
}

loadQuestion(index: number) {
  this.currentQuestion = this.quizQuestions[index];
}

isLastQuestion(): boolean {
  return this.currentQuestionIndex === this.quizQuestions.length - 1;
}

submit2() {
  this.isQuestionAnswered = true;
  const correctAnswer = this.currentQuestion.answer;
  const userAnswer = this.selectedAnswer;

  if (userAnswer === correctAnswer) {
    this.currentQuestion.correct = true;
  } else {
    this.currentQuestion.correct = false;
    this.correctAnswer = this.currentQuestion.answer;
    this.currentQuestion.wrong = true;
  }

  if (!this.isLastQuestion()) {
    this.currentQuestionIndex++;
    this.loadQuestion(this.currentQuestionIndex);
    this.selectedAnswer = ''; 
    this.isQuestionAnswered = false;
  }
}

submit(){
  this.isQuestionAnswered = true;
  const userAnswer = this.selectedAnswer;
  this.correctAnswer = this.currentQuestion.answer;

  if (userAnswer === this.currentQuestion.answer) {
    this.currentQuestion.correct = true;
    Swal.fire({
      title: 'Very Good',
      text: "You are doing great!",
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Continue'
    }).then((result) => {
      if (result.isConfirmed) {
        if (!this.isLastQuestion()) {
          this.currentQuestionIndex++;
          this.loadQuestion(this.currentQuestionIndex);
          this.selectedAnswer = ''; 
          this.isQuestionAnswered = false;
        }
      }
    })
  } else {
    this.currentQuestion.correct = false;
    this.currentQuestion.wrong = true;
    Swal.fire({
      title: 'Oops',
      text: `Correct answer was ${this.currentQuestion.answer}`,
      icon: 'error',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Continue'
    }).then((result) => {
      if (result.isConfirmed) {
        if (!this.isLastQuestion()) {
          this.currentQuestionIndex++;
          this.loadQuestion(this.currentQuestionIndex);
          this.selectedAnswer = ''; 
          this.isQuestionAnswered = false;
        }
      }
    })
  }


}


}
