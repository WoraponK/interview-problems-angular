import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-easy-1',
  standalone: true,
  imports: [NgFor],
  templateUrl: './easy-1.component.html',
  styles: ``
})
export class Easy1Component implements OnInit{
  numbers: any[] = [];

  constructor(){}

  ngOnInit(): void {
    for (let i = 1; i <= 100; i++) {
      if ( i%3 == 0 && i%5 == 0 ) {
        this.numbers.push("FizzBuzz");
      } else if ( i%3 == 0 ) {
        this.numbers.push("Fizz")
      } else if ( i%5 == 0 ) {
        this.numbers.push("Buzz")
      } else {
        this.numbers.push(i)
      }
    }
  }
}
