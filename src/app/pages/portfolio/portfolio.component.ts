import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-portfolio',
  imports: [TitleComponent, ToolbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="p-2 top-0 left-0 w-full bg-black" >
      <app-title title="ARP Racing Photography"/>
      <app-toolbar/>
    </div>
    <picflow-gallery 
      id="gal_LV7QSi90Qs9M1uzf"
      tenant="tnt_1IHEoA81RTBoPxjS"
      lightbox="#000000E6"
      no-padding="true"
      no-background="true"
      show-cover="true"
      class="p-3">
    </picflow-gallery>

  `,
  styles: ``,
})
export class PortfolioComponent {

}
