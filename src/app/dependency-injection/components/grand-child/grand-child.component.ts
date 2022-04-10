import { Component, OnInit, Optional, Self } from '@angular/core';
import { RandomService } from "../../services/random.service";

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss'],
  providers: [RandomService]
})
export class GrandChildComponent implements OnInit {
  randomNo;

  constructor(@Self() private randomService: RandomService) {
    this.randomNo = this.randomService?.RandomNo;
  }

  ngOnInit(): void {
  }

}
