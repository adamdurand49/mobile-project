import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  query: string = ''; 
  nutritionData: any[] = []; 
  errorMessage: string | null = null; 

  constructor(private http: HttpClient) {}

  searchNutrition() {
    const apiUrl = `https://api.api-ninjas.com/v1/nutrition?query=${this.query}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'X-Api-Key': 'b8fesQmbZ8NDSqe0R2ScbQ==XpJfo0O13LSHZM4w'
      })
    };

    //Fetch nutrition data based on input
    this.http.get<any[]>(apiUrl, httpOptions)
      .subscribe(
        data => {
          //Assign fetched nutrition data to the variable
          this.nutritionData = data;
        },
        //Handle error
        error => {
          this.errorMessage = 'Error fetching nutrition data. Please try again later.';
          console.error('Error fetching nutrition data:', error);
        }
      );
  }
}