import { Component } from '@angular/core';
import { HomeCarouselComponent } from '../../components/home-carousel/home-carousel.component';
import { TitleComponent } from '../../components/title/title.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';

@Component({
  selector: 'app-home',
  imports: [HomeCarouselComponent, TitleComponent, ToolbarComponent],
  template: `
    <div class="p-2 absolute top-0 left-0 w-full bg-black bg-opacity-50 z-10 " >
      <app-title title="ARP Racing Photography"/>
      <app-toolbar/>
    </div>
    <app-home-carousel class="position-fixed"></app-home-carousel>
    
  `,
  styles: ``
})
export class HomeComponent {

}
