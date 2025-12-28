import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-portfolio',
  imports: [HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <app-header></app-header>
    <div class="p-3 h-screen w-full bg-neutral-200">
      <picflow-gallery 
        id="gal_LV7QSi90Qs9M1uzf"
        tenant="tnt_1IHEoA81RTBoPxjS"
        lightbox="#000000E6"
        no-padding="true"
        no-background="true"
        show-cover="true"
        class="">
      </picflow-gallery>
    </div>
    

  `,
  styles: ``,
})
export class PortfolioComponent {

}
