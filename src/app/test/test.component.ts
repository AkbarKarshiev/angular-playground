import { ChangeDetectionStrategy, Component, ContentChild, OnInit } from '@angular/core';
import { TestProjectionDirective } from "./test-projection.directive";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {
  @ContentChild(TestProjectionDirective) content!: TestProjectionDirective;

  constructor() { }

  ngOnInit(): void {
  }

}
