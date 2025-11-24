import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './components/title/title.component';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

@Component({
  selector: 'app-root',
  imports: [TitleComponent,RouterOutlet,ToolbarComponent],
  template: `
  <div>
    <div class="bg-gray-100  min-h-30vh shadow-md">
      <app-title title="ARP Racing Photography"/>
      <app-toolbar/>
    </div>
    <router-outlet />
  </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'arpweb_ng_v19';
}
