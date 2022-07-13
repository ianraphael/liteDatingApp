import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  uri: string = 'https://localhost:5000/users'
  data: any;
  constructor (private http: HttpClient) {

  }
  ngOnInit() {
    this.http.get(this.uri).subscribe(response => {
      this.data = response
    }, error => {
      console.log(error)
    })
  }
}
