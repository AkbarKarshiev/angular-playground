import { Component, OnInit } from '@angular/core';

import { RandomService } from "./services/random.service";

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  providers: [RandomService],
  viewProviders: [RandomService]
})
export class DependencyInjectionComponent implements OnInit {
  randomNo;

  constructor(
    private randomService: RandomService
  ) {
    this.randomNo = this.randomService.RandomNo;
  }

  ngOnInit(): void {
  }

}
