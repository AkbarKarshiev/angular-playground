import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedComponentsComponent } from './advanced-components.component';
import { DirectivesModule } from "../directives/directives.module";

@NgModule({
  declarations: [
    AdvancedComponentsComponent,
  ],
  exports: [
    AdvancedComponentsComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ]
})
export class AdvancedComponentsModule { }
