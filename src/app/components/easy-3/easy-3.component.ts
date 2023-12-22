import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-easy-3',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './easy-3.component.html',
  styles: ``
})

export class Easy3Component implements OnInit {
  output3_1: string = '';
  output3_2: string = '';
  output3_3: string = '';
  output3_4: string = '';
  output3_5: string = '';
  output3_6: string = '';

  inputForm = this.fb.group({
    answer: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.output3_1 = '';
    this.output3_2 = '';
    this.output3_3 = '';
    this.output3_4 = '';
    this.output3_5 = '';
    this.output3_6 = '';

    const answer = this.inputForm.value.answer;

    if (!answer) {
      alert('Please input number');
      return;
    }

    const number = Number(answer);

    this.pattern3_1(number);
    this.pattern3_2(number);
    this.pattern3_3(number);
    this.pattern3_4(number);
    this.pattern3_5(number);
    this.pattern3_6(number);

    this.inputForm.reset();
  }

  pattern3_1(n: number) {
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        this.output3_1 += "*";
      }
      this.output3_1 += "\n";
    }
  }

  pattern3_2(n: number) {
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < n - i; j++) {
        this.output3_2 += " ";
      }

      for (let k = 0; k < i; k++) {
        this.output3_2 += "*";
      }
      this.output3_2 += "\n";
    }
  }

  pattern3_3(n: number) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        this.output3_3 += " ";
      }

      for (let k = 0; k < 2 * i - 1; k++) {
        if (i === 1) {
          this.output3_3 += "*";
        } else {
          if (k === 0 || k === 2 * i - 2) {
            this.output3_3 += "*";
          } else {
            this.output3_3 += " ";
          }
        }
      }
      this.output3_3 += "\n"
    }
  }

  pattern3_4(n: number) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (j === i || j === n - i + 1) {
          this.output3_4 += "*";
        } else {
          this.output3_4 += " ";
        }
      }
      this.output3_4 += "\n"
    }
  }

  pattern3_5(n: number) {

    if (n % 2 === 0) {
      n = n / 2

      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
          this.output3_5 += ' ';
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
          this.output3_5 += '*';
        }
        this.output3_5 += '\n';
      }

      for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= n - i; j++) {
          this.output3_5 += ' ';
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
          this.output3_5 += '*';
        }
        this.output3_5 += '\n';
      }
    } else {
      n = (n + 1) / 2

      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
          this.output3_5 += ' ';
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
          this.output3_5 += '*';
        }
        this.output3_5 += '\n';
      }

      for (let i = n - 1; i >= 1; i--) {
        for (let j = 1; j <= n - i; j++) {
          this.output3_5 += ' ';
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
          this.output3_5 += '*';
        }
        this.output3_5 += '\n';
      }
    }
  }

  pattern3_6(n: number) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        this.output3_6 += 'A';
      }

      for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1) {
          this.output3_6 += '+';
        } else {
          this.output3_6 += 'E'
        }
      }

        for (let j = 0; j < n - i; j++) {
          this.output3_6 += 'B';
        }

        this.output3_6 += '\n';
      }

      for (let i = n - 1; i >= 1; i--) {
        for (let j = 1; j <= n - i; j++) {
          this.output3_6 += 'C';
        }

        for (let j = 1; j <= 2 * i - 1; j++) {
          if (j === 1 || j === 2 * i - 1) {
            this.output3_6 += '+';
          } else {
            this.output3_6 += 'E'
          }
        }

        for (let j = 0; j < n - i; j++) {
          this.output3_6 += 'D';
        }
        this.output3_6 += '\n';
      }
    }

  }

