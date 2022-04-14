import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependencyInjectionComponent } from './dependency-injection.component';
import { GrandChildComponent } from './components/grand-child/grand-child.component';
import { ChildComponent } from './components/child/child.component';
import { TestDirective } from './directives/test.directive';
import { ADirective } from './directives/a.directive';
import { BDirective } from './directives/b.directive';
import { CDirective } from './directives/c.directive';



@NgModule({
  declarations: [
    DependencyInjectionComponent,
    GrandChildComponent,
    ChildComponent,
    TestDirective,
    ADirective,
    BDirective,
    CDirective
  ],
  exports: [
    DependencyInjectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DependencyInjectionModule { }
