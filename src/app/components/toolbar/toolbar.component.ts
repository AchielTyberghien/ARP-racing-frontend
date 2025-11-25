import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-toolbar',
  imports: [RouterLink],
  template: `
    <div class="px-[15%] py-4 flex justify-between items-center" >
      <div class="text-lg font-semibold text-white font-helvetica" routerLink="/about">About</div>
      <div class="text-lg font-semibold text-white font-helvetica" routerLink="/portfolio">Portfolio</div>
      <div class="text-lg font-semibold text-white font-helvetica" routerLink="/library">Library</div>
      <div class="text-lg font-semibold text-white font-helvetica" routerLink="/contact">Contact</div>
    </div>
  `,
  styles: ``
})
export class ToolbarComponent {}
