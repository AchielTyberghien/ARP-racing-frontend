import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  imports: [],
  template: `
    <div class="bg-gray-200 p-4 px-100 flex justify-between items-center">
      <div class="text-lg font-semibold text-black font-helvetica">About</div>
      <div class="text-lg font-semibold text-black font-helvetica">Portfolio</div>
      <div class="text-lg font-semibold text-black font-helvetica">Library</div>
      <div class="text-lg font-semibold text-black font-helvetica">Contact</div>
    </div>
  `,
  styles: ``
})
export class ToolbarComponent {}
