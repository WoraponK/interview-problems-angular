import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-easy-2',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './easy-2.component.html',
  styles: ``
})
export class Easy2Component implements OnInit {
  answers: any[] = [];

  inputForm = this.fb.group({
    answer: ['']
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  refresh() {
    this.ngOnInit();
  }

  onSubmit() {
    const answer = this.inputForm.value.answer;

    if(!answer) {
      alert('Please input number');
      return;
    }

    const year = Number(answer);

    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
      this.answers.push(year + ' -> true');
    } else {
      this.answers.push(year + ' -> false');
    }

    this.inputForm.reset();
    this.refresh();
  }
}
