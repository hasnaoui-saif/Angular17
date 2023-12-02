import { Routes } from '@angular/router';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { ParentComponent } from './deferred-loading/parent.component';

export const routes: Routes = [
    {
        path: 'deferred-loading',
        loadComponent: () => ParentComponent,
    },
    {
        path: 'control-flow',
        loadComponent: () => ControlFlowComponent,
    },
];
