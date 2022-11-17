import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  setAnswer:any;

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  add6Days(){
    var today = new Date();
    this.addDays(today, 6).pipe(take(1)).subscribe((ref:any) => {
      if(ref.success){
        this.setAnswer = ref.info;
      }
    })
  }

  add6Weeks(){
    var today = new Date();
    this.addDays(today, (7*6)).pipe(take(1)).subscribe((ref:any) => {
      if(ref.success){
        this.setAnswer = ref.info;
      }
    })
  }

  add187Days(){
    var today = new Date();
    this.addDays(today, 189).pipe(take(1)).subscribe((ref:any) => {
      if(ref.success){
        this.setAnswer = ref.info;
      }
    })
  }


  
  addDays(date:any, days:any) {
    // var result = new Date(date);
    // result.setDate(result.getDate() + days);
    // return result;

    const body = {
      date, days
    }
    return this.httpClient.post(`http://localhost:3000/api/addDays`, body);
  }


}
