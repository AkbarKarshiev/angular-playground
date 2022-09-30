import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offline-status-handling',
  templateUrl: './offline-status-handling.component.html',
  styleUrls: ['./offline-status-handling.component.scss']
})
export class OfflineStatusHandlingComponent implements OnInit {

  constructor(
    private readonly http: HttpClient
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((response) => {
      console.log('Fetched post: ', response);
    });

    this.http.get('https://jsonplaceholder.typicode.com/albums/1').subscribe((response) => {
      console.log('Fetched album: ', response);
    });

    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((response) => {
      console.log('Fetched todo: ', response);
    });
  }
}
