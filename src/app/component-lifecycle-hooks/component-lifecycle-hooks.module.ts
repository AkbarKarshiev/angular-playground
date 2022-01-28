import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ComponentLifecycleHooksComponent } from './component-lifecycle-hooks.component';
import { AllHooksComponent } from './all-hooks/all-hooks.component';
import { ClhChildComponentComponent } from './all-hooks/components/clh-child-component/clh-child-component.component';
import { ClhGrandchildComponentComponent } from './all-hooks/components/clh-grandchild-component/clh-grandchild-component.component';
import { NgDoCheckWithDiffersComponent } from './ng-do-check-with-differs/ng-do-check-with-differs.component';
import { DiffersChildComponentComponent } from './ng-do-check-with-differs/components/differs-child-component/differs-child-component.component';

@NgModule({
  declarations: [
    ComponentLifecycleHooksComponent,
    AllHooksComponent,
    ClhChildComponentComponent,
    ClhGrandchildComponentComponent,
    NgDoCheckWithDiffersComponent,
    DiffersChildComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ComponentLifecycleHooksComponent
  ]
})
export class ComponentLifecycleHooksModule { }
