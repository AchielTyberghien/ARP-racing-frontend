import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-header',
  imports: [TitleComponent, ToolbarComponent],
  template: `
    <div class="p-3 top-0 left-0 w-full bg-black" >
      <app-title title="ARP Racing Photography"/>
      <app-toolbar/>
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {

}
