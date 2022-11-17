import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  numLo:number = 0;
  numHi:number = 10;
  performX:number = 0;
  setAllList:any[] = [];
  setPrimeList:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getPrimesInRange(lowerNumber:number, higherNumber:number){
    this.setPrimeList = []
    this.setAllList = [{
      iNumr:1,
      iPrime:false,
      iTime: 0
    }];
    // program to print prime numbers between the two numbers
    if(lowerNumber >= higherNumber){
      alert("Start number must be less than End.")
    }else{
console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
const t0 = performance.now();
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
          let x = {
            iNumr:i,
            iPrime:false,
            iTime: (performance.now() - t0)
          }
          this.setAllList.push(x)
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
      console.log(i);
      let x = {
        iNumr:i,
        iPrime:true,
        iTime: (performance.now() - t0)
      }
      this.setAllList.push(x)
      this.setPrimeList.push(x)
    }
}
const t1 = performance.now();
this.performX = t1 - t0;
console.log("performance =" + this.performX + 'milliseconds');

  }

    }




    getAverage(){
      const arr = [1, 2, 3, 4, 5];
      const average = arr.reduce((a, b) => a + b, 0) / arr.length;
      console.log(average);
    }

}
