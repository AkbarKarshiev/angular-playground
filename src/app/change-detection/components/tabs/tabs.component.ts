import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild } from '@angular/core';
import { TabComponent } from "../tab/tab.component";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements AfterContentInit {
  @ContentChild(TabComponent) tab: TabComponent;

  intervalRef;
  timer: number = 30;

  ngAfterContentInit() {
    this.intervalRef = setInterval(() => {
      // console.log('interval fired: ', this.timer)
      const timer = this.timer === 0 ? 0 : this.timer - 1
      this.timer = timer;
      if (this.timer === 0) {
        clearInterval(this.intervalRef);
      }
      // this.tab.content = this.timer;
    }, 1000);
  }
  doSome(){
    this.timer--;
  }
}
