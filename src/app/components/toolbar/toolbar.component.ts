import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  imports: [],
  template: `
    <div class="px-[15%] py-4 flex justify-between items-center" >
      <div class="text-lg font-semibold text-white font-helvetica">About</div>
      <div class="text-lg font-semibold text-white font-helvetica">Portfolio</div>
      <div class="text-lg font-semibold text-white font-helvetica">Library</div>
      <div class="text-lg font-semibold text-white font-helvetica">Contact</div>
    </div>
  `,
  styles: ``
})
export class ToolbarComponent {}
