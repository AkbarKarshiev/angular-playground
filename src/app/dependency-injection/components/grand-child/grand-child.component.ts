import { Component, Host, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { RandomService } from "../../services/random.service";

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss'],
})
export class GrandChildComponent implements OnInit {
  randomNo;

  constructor(@Optional() private randomService: RandomService) {
    this.randomNo = this.randomService?.RandomNo;
  }

  ngOnInit(): void {
  }

}
