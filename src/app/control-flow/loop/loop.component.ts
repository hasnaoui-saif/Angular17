import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Task = {id: number, name: string}

@Component({
    selector: 'app-loop',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './loop.component.html',
    styles: ``,
})
export class LoopComponent {
    tasks: Task[] = [
        { id: 1, name: 'Task 1' },
        { id: 2, name: 'Task 2' },
        { id: 3, name: 'Task 3' }
    ];

    trackById = (index: number, task: Task): string => {
        return task.id.toString();
    };
}
