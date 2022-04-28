import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedComponentsComponent } from './advanced-components.component';
import { DirectivesModule } from "../directives/directives.module";
import { AcChildComponent } from './components/ac-child/ac-child.component';
import { AcParentComponent } from './components/ac-parent/ac-parent.component';
import { AcExampleComponent } from './components/ac-example/ac-example.component';
import { AcExampleChildComponent } from './components/ac-example-child/ac-example-child.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AdvancedComponentsComponent,
    AcChildComponent,
    AcParentComponent,
    AcExampleComponent,
    AcExampleChildComponent,
  ],
  exports: [
    AdvancedComponentsComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    FormsModule
  ]
})
export class AdvancedComponentsModule { }
