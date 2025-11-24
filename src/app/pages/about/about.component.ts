import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';

@Component({
  selector: 'app-about',
  imports: [TitleComponent, ToolbarComponent],
  template: `
    <div class="p-2 top-0 left-0 w-full bg-black" >
      <app-title title="ARP Racing Photography"/>
      <app-toolbar/>
    </div>
    <div>
      <div></div>
      <div></div>
    </div>
  `,
  styles: ``,
})
export class AboutComponent {

}
