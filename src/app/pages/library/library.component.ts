import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-library',
  imports: [TitleComponent, ToolbarComponent],
  template: `
    <div class="p-2 top-0 left-0 w-full bg-black" >
      <app-title title="ARP Racing Photography"/>
      <app-toolbar/>
    </div>
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
  `,
  styles: ``,
})
export class LibraryComponent {

}
