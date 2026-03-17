import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-header',
  imports: [TitleComponent, ToolbarComponent],
  template: `
    <div class="relative top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-3 bg-neutral-700 bg-opacity-60 backdrop-blur-md">
  
  <!-- Title -->
  <app-title title="ARP Racing Photography" class="text-white text-lg sm:text-xl font-semibold"/>
  
  <!-- Toolbar -->
  <app-toolbar class="text-white"/>
  
</div>

    
  `,
  styles: ``,
})
export class HeaderComponent {

}
