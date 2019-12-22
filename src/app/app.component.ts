import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fetchJSONDemo1';
  personsArray: any = [];
  selectedValue: any = [];
  constructor(private http: HttpClient) {}

  fetchPersons() {
    return this.http.get('./assets/test.json').subscribe((data) => {
      this.personsArray = data;
      console.log(data);
    });
  }
}
