import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { DirectivesComponent } from './directives.component';
import { NgForTrackbyComponent } from './ng-for-trackby/ng-for-trackby.component';
import { CustomAttributeDirectiveDirective } from './custom-directives/custom-attribute-directive.directive';
import { CustomStructuralDirectiveDirective } from './custom-directives/custom-structural-directive.directive';
import { CustomToggleDirectiveDirective } from './custom-directives/custom-toggle-directive.directive';
import { CustomTooltipDirectiveDirective } from './custom-directives/custom-tooltip-directive.directive';
import { CustomIfDirectiveDirective } from './custom-directives/custom-if-directive.directive';

@NgModule({
  declarations: [
    DirectivesComponent,
    NgClassComponent,
    NgStyleComponent,
    NgForTrackbyComponent,
    CustomAttributeDirectiveDirective,
    CustomStructuralDirectiveDirective,
    CustomToggleDirectiveDirective,
    CustomTooltipDirectiveDirective,
    CustomIfDirectiveDirective,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DirectivesComponent,
    CustomIfDirectiveDirective,
    CustomStructuralDirectiveDirective
  ]
})
export class DirectivesModule { }
