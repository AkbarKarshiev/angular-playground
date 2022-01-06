import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
})
export class DirectivesComponent implements OnInit {
  class = 'red';
  constructor() { }

  ngOnInit(): void {
  }

}
