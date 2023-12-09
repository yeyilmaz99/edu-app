import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProgramForm } from '../models/programForm.model';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response.model';
import { Programs } from '../models/programs.model';
import { ListResponseModel } from '../models/listResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  apiUrl = "https://localhost:44345/api/Programs/";
  constructor(private httpClient:HttpClient) { }


  add(formData:FormData):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"addwithquestions",formData)
  }

  getAll():Observable<ListResponseModel<Programs>>{
    return this. httpClient.get<ListResponseModel<Programs>>(this.apiUrl+"getall")
  }

  pushQuestions(formData:FormData):Observable<ResponseModel>{
    let apiUrl = "https://localhost:44345/api/Questions/add"
    return this.httpClient.post<ResponseModel>(apiUrl,formData)
  }




}
