import { Component, OnInit } from '@angular/core';

interface Movie {
  title: string;
  director: string;
}

@Component({
  selector: 'app-ng-for-trackby',
  templateUrl: './ng-for-trackby.component.html',
  styleUrls: ['./ng-for-trackby.component.scss']
})
export class NgForTrackbyComponent implements OnInit {
  movies: Movie[] = [];

  mTitle:string="";
  mDirector:string="";

  constructor() { }

  ngOnInit(): void {
    this.Refresh();
  }

  remove(i: number) {
    this.movies.splice(i,1);
  }

  addMovie() {
    this.movies.push({ title: this.mTitle, director: this.mDirector})
    this.mTitle=""
    this.mDirector=""
  }

  trackByFn(index: number, item: Movie) {
    return item.title;
  }

  Refresh() {
    this.movies = [
      { title: 'Zootopia', director: 'Byron Howard, Rich Moore' },
      { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder' },
      { title: 'Captain American: Civil War', director: 'Anthony Russo, Joe Russo' },
      { title: 'X-Men: Apocalypse', director: 'Bryan Singer' },
      { title: 'Warcraft', director: 'Duncan Jones' },
    ]
  }
}
  
