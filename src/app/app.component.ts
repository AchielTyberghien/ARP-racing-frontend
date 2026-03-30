import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <div>
    <router-outlet />
  </div>
  `,
  styles: [],

})
export class AppComponent {
  title = 'arpweb_ng_v19';
}
