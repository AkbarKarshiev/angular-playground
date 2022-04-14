import { Component, OnInit } from '@angular/core';
import { RandomService } from "../../services/random.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  // providers: [RandomService],
  viewProviders: [RandomService],
})
export class ChildComponent implements OnInit {
  randomNo;

  constructor(private randomService: RandomService) {
    this.randomNo = this.randomService.RandomNo;
  }

  ngOnInit(): void {
  }

}
