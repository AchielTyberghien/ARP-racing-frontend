import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-title',
  imports: [RouterLink],
  template: `
    <div 
      class="max-sm:text-center sm:text-left text-4xl sm:text-5xl md:text-6xl font-bold cursor-pointer transition-transform duration-300"
      routerLink="" 
      style="font-family: 'Roboto', sans-serif; font-weight: 700;">
      <span class="text-red-500">ARP</span>{{ title().replace('ARP', '') }}
    </div>
  `,
  styles: ``
})
export class TitleComponent {
  title = input('');
}
