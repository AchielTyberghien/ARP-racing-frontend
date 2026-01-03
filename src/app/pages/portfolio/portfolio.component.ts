import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-portfolio',
  imports: [HeaderComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
  <div class="min-h-screen flex flex-col bg-neutral-200">
    <app-header></app-header>

    <main class="flex-1 p-3">
      <picflow-gallery
        id="gal_LV7QSi90Qs9M1uzf"
        tenant="tnt_1IHEoA81RTBoPxjS"
        lightbox="#000000E6"
        no-padding="true"
        no-background="true"
        show-cover="true"
        class="relative">
      </picflow-gallery>
    </main>
    <app-footer></app-footer>
  </div>

    
  `,
  styles: ``,
})
export class PortfolioComponent {

}
