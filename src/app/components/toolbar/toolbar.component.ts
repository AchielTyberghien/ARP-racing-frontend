import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-toolbar',
  imports: [RouterLink],
  template: `
    <div class="px-[25%] py-4 flex justify-between items-center" >
      <!-- <div class="text-2xl font-semibold text-white font-helvetica hover:scale-130 transition hover:underline hover:decoration-red-500 hover:underline-offset-10 hover:decoration-3" routerLink="/about">About</div> -->
      <div class="text-3xl font-semibold font-helvetica hover:scale-130 transition hover:underline hover:decoration-red-500 hover:underline-offset-10 hover:decoration-3" routerLink="/portfolio">Portfolio</div>
      <div class="text-3xl font-semibold font-helvetica hover:scale-130 transition hover:underline hover:decoration-red-500 hover:underline-offset-10 hover:decoration-3" routerLink="/library">Library</div>
      <div class="text-3xl font-semibold font-helvetica hover:scale-130 transition hover:underline hover:decoration-red-500 hover:underline-offset-10 hover:decoration-3" routerLink="/contact">Contact</div>
    </div>
  `,
  styles: ``
})
export class ToolbarComponent {}
