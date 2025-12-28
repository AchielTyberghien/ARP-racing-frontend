import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-header',
  imports: [TitleComponent, ToolbarComponent],
  template: `
    <div class="p-3 top-0 w-full bg-neutral-300" >
      <app-title title="ARP Racing Photography" class="text-neutral-800"/>
      <app-toolbar class="text-neutral-800"/>
    </div>
    
  `,
  styles: ``,
})
export class HeaderComponent {

}
