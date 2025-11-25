import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-portfolio',
  imports: [TitleComponent, ToolbarComponent],
  template: `
    <div class="p-2 top-0 left-0 w-full bg-black" >
      <app-title title="ARP Racing Photography"/>
      <app-toolbar/>
    </div>
    <div class="p-4 flex">
      <div class="m-2">
        <img src="img/portfolio/IMG_7786.jpg" alt="" class="mb-3">
        <img src="img/portfolio/IMG_8048.jpg" alt="">
      </div>
      <div class="m-2">
        <img src="img/portfolio/IMG_7916.jpg" alt="" class="mb-3">
        <img src="img/portfolio/IMG_8408.jpg" alt="">
      </div>
      <div class="m-2">
        <img src="img/portfolio/IMG_8400.jpg" alt="" class="mb-3">
        <img src="img/portfolio/IMG_8223.jpg" alt="" class="mb-3">
        <img src="img/portfolio/IMG_8076.jpg" alt="">
      </div>
    </div>
  `,
  styles: ``,
})
export class PortfolioComponent {

}
