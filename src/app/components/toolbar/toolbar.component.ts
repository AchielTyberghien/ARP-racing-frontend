import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-toolbar',
  imports: [RouterLink],
  template: `
    <div class=" flex flex-col md:flex-row justify-center items-center
            space-y-4 md:space-y-0 md:space-x-10
            py-4 bg-transparent md:px-15">

      <div routerLink="/portfolio"
          class="text-lg md:text-xl nav-underline font-semibold font-helvetica
                  transition-transform duration-300 hover:scale-110 cursor-pointer">
        Portfolio
      </div>

      <div routerLink="/library"
          class="text-lg md:text-xl nav-underline font-semibold font-helvetica
                  transition-transform duration-300 hover:scale-110 cursor-pointer">
        Library
      </div>

      <div routerLink="/contact"
          class="text-lg md:text-xl nav-underline font-semibold font-helvetica
                  transition-transform duration-300 hover:scale-110 cursor-pointer">
        Contact
      </div>

    </div>

  `,
  styles: ``
})
export class ToolbarComponent {}
