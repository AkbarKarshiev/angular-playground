import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { DirectivesComponent } from './directives.component';
import { NgForTrackbyComponent } from './ng-for-trackby/ng-for-trackby.component';
import { CustomAttributeDirectiveDirective } from './custom-directive/custom-attribute-directive.directive';
import { CustomStructuralDirectiveDirective } from './custom-directive/custom-structural-directive.directive';

@NgModule({
  declarations: [
    DirectivesComponent,
    NgClassComponent,
    NgStyleComponent,
    NgForTrackbyComponent,
    CustomAttributeDirectiveDirective,
    CustomStructuralDirectiveDirective,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DirectivesComponent,
  ]
})
export class DirectivesModule { }
