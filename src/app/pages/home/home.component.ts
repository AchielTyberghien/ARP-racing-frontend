import { Component } from '@angular/core';
import { HomeCarouselComponent } from '../../components/home-carousel/home-carousel.component';
import { TitleComponent } from '../../components/title/title.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';

@Component({
  selector: 'app-home',
  imports: [HomeCarouselComponent, TitleComponent, ToolbarComponent],
  template: `
  <div class="flex flex-wrap w-screen h-screen overflow-hidden ">
    <div class="w-screen p-3 absolute top-0 z-10" >
      <app-toolbar class="text-white"/>
    </div>
    <div class="absolute flex bottom-0 h-40 w-full z-10 items-center">
      <div class="justify-center flex w-full">
        <app-title class="text-white" title="ARP Racing Photography"/>
      </div>
      <div class="absolute right-6">
        <a 
          href="https://www.instagram.com/arp_racing_photography/"
          target="_blank"
          rel="noopener noreferrer"
          class="cursor-pointer"
        >
          <img src="img/insta_logo.png" alt="Instagram" class="w-8 h-8 mx-7" />
        </a>
      </div>
    </div>
    <app-home-carousel class="position-fixed"></app-home-carousel>
  </div>
  
    
  `,
  styles: ``
})
export class HomeComponent {

}
