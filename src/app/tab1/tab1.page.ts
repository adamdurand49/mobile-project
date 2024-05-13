import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //User info
  name: string = ''; 
  age: number | null = null; 
  height: number | null = null; 
  weight: number | null = null; 

  constructor() {}

}