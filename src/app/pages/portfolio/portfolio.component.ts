import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-portfolio',
  imports: [HeaderComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
  <div class="min-h-screen flex flex-col bg-neutral-100">

    <!-- Header -->
    <app-header></app-header>

    <!-- Main content -->
    <main class="flex-1 px-4 sm:px-6 lg:px-10 py-6">
      <div class="relative max-w-10xl h-full overflow-hidden">
        <picflow-gallery
          id="gal_LV7QSi90Qs9M1uzf"
          tenant="tnt_1IHEoA81RTBoPxjS"
          lightbox="#000000E6"
          no-padding="true"
          no-background="true"
          show-cover="true"
          class="relative w-full h-full">
        </picflow-gallery>
      </div>
    </main>

    <!-- Footer -->
    <app-footer></app-footer>

  </div>


    
  `,
  styles: ``,
})
export class PortfolioComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Portfolio - ARP Racing Photography');
    this.metaService.updateTag({
      name: 'description',
      content: 'Explore the portfolio of ARP Racing Photography, showcasing a curated selection of high-speed motorsport images capturing the thrill and excitement of racing events.'
    });
  }

}
