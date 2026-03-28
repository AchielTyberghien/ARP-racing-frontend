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
          class="nav-link text-lg md:text-xl font-semibold font-helvetica
                  transition-transform duration-300 hover:scale-110 cursor-pointer">
        Portfolio
      </div>

      <div routerLink="/library"
          class="nav-link text-lg md:text-xl font-semibold font-helvetica
                  transition-transform duration-300 hover:scale-110 cursor-pointer">
        Library
      </div>

      <div routerLink="/contact"
          class="nav-link text-lg md:text-xl font-semibold font-helvetica
                  transition-transform duration-300 hover:scale-110 cursor-pointer">
        Contact
      </div>

    </div>

  `,
  styles: ``
})
export class ToolbarComponent {}
