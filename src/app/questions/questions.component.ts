import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Question } from "../module.questions";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Question[];
  currentQues = 0;
  currentAns: string;
  count: number = 0;
  isFinished: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  submitAnswer() {
    if (this.currentAns == this.questions[this.currentQues].correctAnswer) {
      if (!this.questions[this.currentQues].isAnswered) {
          this.count++;
      }
    } 
    this.questions[this.currentQues].isAnswered = true;
  }

  nextQuestion() {
    if (this.currentQues < this.questions.length - 1) {
      this.currentQues++;
    } else {
      this.isFinished = true;
    }
  }

  loadQuestion(): void {
    this.dataService.loadQuestionDetails().subscribe(data=>this.questions=data);
  }

}
