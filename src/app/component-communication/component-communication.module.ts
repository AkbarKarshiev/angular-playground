import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { ComponentCommunicationComponent } from './component-communication.component';
import { P2cChildComponentComponent } from './parent-to-child/p2c-child-component/p2c-child-component.component';
import { C2pChildComponentComponent } from './child-to-parent/c2p-child-component/c2p-child-component.component';



@NgModule({
  declarations: [
    ComponentCommunicationComponent,
    ParentToChildComponent,
    ChildToParentComponent,
    C2pChildComponentComponent,
    P2cChildComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentCommunicationComponent
  ]
})
export class ComponentCommunicationModule { }
