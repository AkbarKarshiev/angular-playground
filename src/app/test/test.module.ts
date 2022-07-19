import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { TestProjectionDirective } from './test-projection.directive';

@NgModule({
  declarations: [TestComponent, TestProjectionDirective],
  imports: [
    CommonModule
  ],
  exports: [TestComponent, TestProjectionDirective]
})
export class TestModule { }
