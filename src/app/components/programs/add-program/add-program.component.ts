import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProgramForm } from 'src/app/models/programForm.model';
import { Question } from 'src/app/models/question.model';
import { QuestionForm } from 'src/app/models/questionForm.model';
import { ProgramService } from 'src/app/services/program.service';

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.css']
})
export class AddProgramComponent implements OnInit {

  programAddForm: FormGroup
  previewImage:any;
  programAddFormImage:any;

  constructor(private formBuilder: FormBuilder, private programService: ProgramService) { }

  ngOnInit(): void {
    this.createAddProgramForm()
  }

  createAddProgramForm() {
    this.programAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      imageData: [null, Validators.required],
      description: ["", Validators.required],
      authorId: ["", Validators.required],
      authorName: ["", Validators.required],
      questions: this.formBuilder.array([])
    });
  }

  get questionForms() {
    return this.programAddForm.get('questions') as FormArray;
  }

  addQuestion() {
    let question = this.formBuilder.group({
      questionHeader: [""],
      questionSubText: [""],
      answer: ["", Validators.required],
      options: this.formBuilder.array([]),
      imageData: [null, Validators.required]
    });

    this.questionForms.push(question);
    
  }


  getOptionsFormGroup(index: number) {
    const questionForm = this.questionForms.at(index) as FormGroup;
    return questionForm.get('options') as FormArray;
  }
  
  addOptions(index: number) {
    const optionsArray = this.getOptionsFormGroup(index);
    const option = this.formBuilder.group({
      opt: ["", Validators.required]
    });
    optionsArray.push(option);
  }
  
  removeOption(questionIndex: number, optionIndex: number) {
    const optionsArray = this.getOptionsFormGroup(questionIndex);
    optionsArray.removeAt(optionIndex);
  }


  removeQuestion(index: number) {
    this.questionForms.removeAt(index);
  }

  submitForm() {
    if (this.programAddForm.valid) {
      let program: ProgramForm = Object.assign({}, this.programAddForm.value);
      const formData = new FormData();
      formData.append('Name', program.name);
      formData.append('Description', program.description);
      formData.append('AuthorId', program.authorId.toString());
      formData.append('AuthorName', program.authorName);
  
      // Ana resmi ekleyin (ImageData)
      const programImageFile = this.programAddForm.get('imageData').value;
      formData.append('ImageData', programImageFile);

      console.log("programımage",programImageFile);
  
      // Her bir sorunun bilgilerini ekleyin (Questions)
      if (program.questions && program.questions.length > 0) {
        program.questions.forEach((question: any, index: number) => {
          formData.append(`Questions[${index}][QuestionHeader]`, question.questionHeader);
          formData.append(`Questions[${index}][QuestionSubText]`, question.questionSubText);
          formData.append(`Questions[${index}][Answer]`, question.answer);
          console.log(question.imageData);

          const questionForm = this.questionForms.at(index);
          console.log(questionForm.get('imageData').value);

          const questionImageFile:File = question.imageData;
          console.log(questionImageFile);

            formData.append(`Questions[${index}][ImageData]`, questionForm.get('imageData').value);
          // Question seçeneklerini FormData'ya ekleyin
          if (question.options && question.options.length > 0) {
            question.options.forEach((option: any, optIndex: number) => {
              formData.append(`Questions[${index}][Options][${optIndex}]`, option.opt);
            });
          }
        });
      }
  
      formData.forEach((value, key) => {
        console.log(key + ', ' + value); // FormData içeriğini konsola logla
      });

      this.programService.add(formData).subscribe(response => {
        console.log(response);
      });
    }
  }
  



  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.programAddForm.patchValue({ imageData: file });
    this.programAddFormImage = file;
  }

  getProgramImageDataUrl(): string {
    const programAddFormImageData = this.programAddForm.get('imageData').value;
    return programAddFormImageData ? programAddFormImageData : null;
  }

  onQuestionImageChange(event: any, index: number) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      const questionForm = this.questionForms.at(index);
      questionForm.patchValue({ imageData: file });
    }
  }
  

  getQuestionImageDataUrl(index: number) {
    const questionForm = this.questionForms.at(index);
    const questionImageData = questionForm.get('imageData').value;
    return questionImageData ? questionImageData : null;
  }
  
}
