import { Component } from '@angular/core';
import { HomeCarouselComponent } from '../../components/home-carousel/home-carousel.component';
import { TitleComponent } from '../../components/title/title.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [HomeCarouselComponent, TitleComponent, ToolbarComponent],
  template: `
  <div class="relative w-screen h-screen overflow-hidden">

    <!-- Carousel Background -->
    <app-home-carousel class="absolute inset-0 w-full h-full object-cover"></app-home-carousel>

    <!-- Overlay for readability -->
    <div class="absolute inset-0 bg-linear-to-b from-black via-transparent to-transparent opacity-50"></div>

    <!-- Toolbar -->
    <div class="absolute top-0 left-0 right-0 p-3 sm:p-4 z-20">
      <app-toolbar
        class="text-white
              flex justify-center
              scale-100 sm:scale-125 lg:scale-150
              space-x-4 sm:space-x-10 lg:space-x-20">
      </app-toolbar>
    </div>

    <!-- Bottom title + Instagram -->
    <div
      class="absolute bottom-0 left-0 right-0 z-20
            flex flex-col sm:flex-row
            sm:items-center sm:justify-between
            gap-4
            px-4 sm:px-8
            py-4 sm:py-6">

      <!-- Title -->
      <div class="max-sm:text-center sm:text-left">
        <app-title
          class="text-white text-2xl sm:text-3xl md:text-4xl font-bold"
          title="ARP Racing Photography">
        </app-title>

        <p class="text-white text-sm sm:text-lg mt-1 opacity-80">
          Capturing the speed and adrenaline
        </p>
      </div>

      <!-- Instagram -->
      <a
        href="https://www.instagram.com/arp_racing_photography/"
        target="_blank"
        rel="noopener noreferrer"
        class="self-center sm:self-auto
              cursor-pointer
              transition-transform hover:scale-110">
        <img
          src="img/insta_logo.png"
          alt="Instagram"
          class="w-8 h-8 sm:w-10 sm:h-10">
      </a>

    </div>

  </div>



  
    
  `,
  styles: ``
})
export class HomeComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('ARP Racing Photography');
    this.metaService.updateTag({
      name: 'description',
      content: 'Welcome to ARP Racing Photography - Capturing the speed and adrenaline of motorsport events through stunning photography.'
    });
  }

}
