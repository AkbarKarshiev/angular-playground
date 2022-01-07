import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  class = 'red';
  show = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleText() {
    this.show = !this.show;
  }
}
