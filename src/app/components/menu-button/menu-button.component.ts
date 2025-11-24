import { Component, output } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  imports: [],
  template: `
    <button class="text-3xl" (click)="btnClicked.emit()">☰</button>
  `,
  styles: ``
})
export class MenuButtonComponent {

  btnClicked = output();
}
