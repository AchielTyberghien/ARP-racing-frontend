import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-library',
  imports: [HeaderComponent, NgOptimizedImage],
  template: `
    <app-header></app-header>
    <div class="flex flex-wrap justify-center">
      <div class="relative m-10 w-90 h-60 overflow-hidden">
        <p class="absolute inset-0 mb-0 flex items-center justify-center text-white font-bold text-center bg-black bg-opacity-50">
          6 uren van Kortrijk
        </p>
        <img src="img/portfolio/IMG_8048.jpg" alt="" class="w-full h-full object-cover object-center">
      </div>
      <div class="relative m-10 w-90 h-60 overflow-hidden">
        <p class="absolute inset-0 mb-0 flex items-center justify-center text-white font-bold text-center bg-black bg-opacity-50">
          6 uren van Kortrijk
        </p>
        <img src="img/portfolio/IMG_7916.jpg" alt="" class="w-full h-full object-cover object-center">
      </div>
      <div class="relative m-10 w-90 h-60 overflow-hidden">
        <p class="absolute inset-0 mb-0 flex items-center justify-center text-white font-bold text-center bg-black bg-opacity-50">
          6 uren van Kortrijk
        </p>
        <img src="img/portfolio/IMG_8076.jpg" alt="" class="w-full h-full object-cover object-center">
      </div>
      <div class="relative m-10 w-90 h-60 overflow-hidden">
        <p class="absolute inset-0 mb-0 flex items-center justify-center text-white font-bold text-center bg-black bg-opacity-50">
          6 uren van Kortrijk
        </p>
        <img src="img/portfolio/IMG_8223.jpg" alt="" class="w-full h-full object-cover object-center">
      </div>
    </div>
    <img ngSrc="Arp%20Racing/Carousel/IMG_8782i.jpg" alt="test rally spa" width="500" height="300" priority="true">
  `,
  styles: ``,
})
export class LibraryComponent {

}
