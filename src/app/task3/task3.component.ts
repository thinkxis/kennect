import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {

  codeSolution = `
  public int TrapWater(int[] height){
      if (height == null || height.Length == 0){
          return 0;
      }
  
      int dipB = 0;
      int size = height.Length;
      int[] leftMax = new int[size];
  
      leftMax[0] = height[0];
      for (int i = 1; i < size; i++){
          leftMax[i] = Math.Max(height[i], leftMax[i - 1]);
      }
  
      int rightMax = height[size - 1];
      for (int i = size - 2; i >= 0; i--){
          rightMax = Math.Max(height[i], rightMax);
          dipB += Math.Min(leftMax[i], rightMax) - height[i];
      }
  
      return dipB;
  }
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
