import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-conditional-statement',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './conditional-statement.component.html',
    styles: ``,
})
export class ConditionalStatementComponent {
    isCompleted!: boolean;
}
