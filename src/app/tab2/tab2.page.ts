import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  muscle: string = '';
  exercises: any[] = [];
  errorMessage: string | null = null;

  constructor(private http: HttpClient) {}

  searchExercises() {
    //Nothing would come up after inputting a muscle
    //After hard coding the variables, the exercises did apper after entering muscle 1/2
    //Its likely to be a problem with the API as the Nutrition tab worked
    this.exercises = [
      { name: 'Exercise 1', muscle: 'Muscle 1' },
      { name: 'Exercise 2', muscle: 'Muscle 2' },
    ];

    if (!this.muscle) {
      this.errorMessage = 'Please enter a muscle.';
      return;
    }

    const apiUrl = 'https://api.api-ninjas.com/v1/exercises';
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Api-Key': 'b8fesQmbZ8NDSqe0R2ScbQ==XpJfo0O13LSHZM4w'
      })
    };

    this.http.get<any[]>(`${apiUrl}?muscle=${this.muscle}`, httpOptions)
      .subscribe(
        data => {
          this.exercises = data;
          this.errorMessage = null; 
        },
        error => {
          this.errorMessage = 'Error fetching exercises. Please try again later.';
          console.error('Error fetching exercises:', error);
        }
      );
  }
}