import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    
    <p>
      child works!
    </p>
  `,
  styles: ``
})
export class ChildComponent {

}
