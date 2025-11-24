import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  template: `
      <div class="text-center text-3xl font-bold text-black font-helvetica "> {{title()}} </div>
  `,
  styles: ``
})
export class TitleComponent {
  title = input('');
}
