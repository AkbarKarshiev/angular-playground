import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { DirectivesComponent } from './directives.component';
import { NgForTrackbyComponent } from './ng-for-trackby/ng-for-trackby.component';

@NgModule({
  declarations: [
    DirectivesComponent,
    NgClassComponent,
    NgStyleComponent,
    NgForTrackbyComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DirectivesComponent,
  ]
})
export class DirectivesModule { }
