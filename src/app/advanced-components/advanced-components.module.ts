import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedComponentsComponent } from './advanced-components.component';
import { DirectivesModule } from "../directives/directives.module";
import { AcChildComponent } from './components/ac-child/ac-child.component';
import { AcParentComponent } from './components/ac-parent/ac-parent.component';

@NgModule({
  declarations: [
    AdvancedComponentsComponent,
    AcChildComponent,
    AcParentComponent,
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
