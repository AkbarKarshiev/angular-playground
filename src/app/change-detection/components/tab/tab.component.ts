import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent {
  @Input()
  set content(value) {
    console.log(typeof value)
    this._content = value;
    // this.cdr.markForCheck();
  };
  get content() {
    return this._content;
  }
  _content;

  constructor(private cdr: ChangeDetectorRef) {
  }

  get runChangeDetection() {
    console.log('TodoComponent - Checking the view');
    return true;
  }
}
