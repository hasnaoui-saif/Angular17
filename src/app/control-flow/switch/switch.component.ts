import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-switch',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './switch.component.html',
    styles: ``,
})
export class SwitchComponent {

    fruit!: 'apple' | 'orange' | 'watermelon';
}
