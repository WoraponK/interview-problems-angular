import { Component, OnInit} from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-medium-1',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './medium-1.component.html',
  styles: ``
})
export class Medium1Component implements OnInit {
  answers: any[] = [];

  inputForm = this.fb.group({
    answer: ['']
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.answers)
  }

  onSubmit() {
    const answer = this.inputForm.value.answer;

    if (!answer) {
      alert('Please input number');
      return;
    }

    const number = Number(answer);
    const primeArray = [];

    for (let i = 1; i <= number; i++) {
      if (this.isPrime(i)) {
        primeArray.push(i);
      }
    }

    const primeArrayString = primeArray.join(" ");

    this.answers.push(number + ' -> ' + primeArrayString)
    this.inputForm.reset();
  }

  isPrime(n: number): boolean {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

}
