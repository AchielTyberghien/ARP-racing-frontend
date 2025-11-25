import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-title',
  imports: [RouterLink],
  template: `
      <div class="text-center text-3xl font-bold text-white font-helvetica " routerLink=""> {{title()}} </div>
  `,
  styles: ``
})
export class TitleComponent {
  title = input('');
}
