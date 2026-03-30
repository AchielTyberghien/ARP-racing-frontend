import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-header',
  imports: [TitleComponent, ToolbarComponent],
  template: `
    <div class="relative top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-3 bg-[#0f0f14]/75 supports-backdrop-filter:bg-[#0f0f14]/75 
     supports-backdrop-filter:backdrop-blur-md border-b border-white/6">
  
      <!-- Title -->
      <app-title title="ARP Racing Photography" class="text-white"/>
      
      <!-- Toolbar -->
      <app-toolbar class="text-white scale-125"/>

    </div>

    
  `,
  styles: ``,
})
export class HeaderComponent {

}
