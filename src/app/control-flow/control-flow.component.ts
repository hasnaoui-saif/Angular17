import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConditionalStatementComponent } from './conditional-statement/conditional-statement.component';
import { LoopComponent } from './loop/loop.component';
import { SwitchComponent } from './switch/switch.component';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, ConditionalStatementComponent, LoopComponent, SwitchComponent],
  template: `
      <app-conditional-statement></app-conditional-statement>
      <hr>
      <app-loop></app-loop>
      <hr>
      <app-switch></app-switch>
  `,
  styles: ``
})
export class ControlFlowComponent {

}
