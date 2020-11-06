import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Question } from './module.questions';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  loadQuestionDetails():Observable<Question[]> {
    return this.httpClient.get<Question[]>("http://localhost:3000/question");
  }
}
