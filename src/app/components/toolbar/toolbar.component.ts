import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-toolbar',
  imports: [RouterLink],
  template: `
    <div class="w-full flex flex-col md:flex-row justify-center items-center
            space-y-4 md:space-y-0 md:space-x-12
            py-4 bg-transparent">

      <div routerLink="/portfolio"
          class="text-lg md:text-xl font-semibold font-helvetica
                  transition-transform duration-300
                  hover:scale-110 hover:underline hover:decoration-red-500 hover:underline-offset-4
                  cursor-pointer">
        Portfolio
      </div>

      <div routerLink="/library"
          class="text-lg md:text-xl font-semibold font-helvetica
                  transition-transform duration-300
                  hover:scale-110 hover:underline hover:decoration-red-500 hover:underline-offset-4
                  cursor-pointer">
        Library
      </div>

      <div routerLink="/contact"
          class="text-lg md:text-xl font-semibold font-helvetica
                  transition-transform duration-300
                  hover:scale-110 hover:underline hover:decoration-red-500 hover:underline-offset-4
                  cursor-pointer">
        Contact
      </div>

    </div>

  `,
  styles: ``
})
export class ToolbarComponent {}
