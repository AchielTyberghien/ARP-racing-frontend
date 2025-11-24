import { Component } from '@angular/core';
import { MenuButtonComponent } from '../menu-button/menu-button.component';

@Component({
  selector: 'app-toolbar',
  imports: [MenuButtonComponent],
  template: `
    <app-menu-button (btnClicked)="showButtonClicked()"/>
  `,
  styles: ``
})
export class ToolbarComponent {
  showButtonClicked() {
    console.log('Button clicked!');
  }
}
