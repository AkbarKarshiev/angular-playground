import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { DirectivesComponent } from './directives.component';

@NgModule({
  declarations: [
    DirectivesComponent,
    NgClassComponent,
    NgStyleComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DirectivesComponent,
  ]
})
export class DirectivesModule { }
