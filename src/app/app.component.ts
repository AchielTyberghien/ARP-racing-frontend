import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './components/title/title.component';
import { MenuButtonComponent } from "./components/menu-button/menu-button.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitleComponent, ToolbarComponent],
  template: `
    <app-title title="Portfilio"/>
    <router-outlet />
    <app-toolbar/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'arpweb_ng_v19';
}
