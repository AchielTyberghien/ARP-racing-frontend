import { Component, OnInit } from '@angular/core';
import { CarouselComponent, CarouselInnerComponent, CarouselItemComponent } from '@coreui/angular';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [CarouselComponent, CarouselInnerComponent, CarouselItemComponent, NgOptimizedImage],
  template: `
  <div class="h-screen w-screen bg-black">
    <c-carousel (itemChange)="onItemChange($event)" [interval]="5000" transition="slide" class="relative h-screen">
      <c-carousel-inner class="relative h-full">
        @for (slide of slides; track slide.src) {
          <c-carousel-item class="relative h-full">
            <img
              ngSrc="{{slide.src}}"
              alt="{{slide.title}}"
              fill
              class="h-screen w-full object-cover transition"
              loading="lazy"
            />
          </c-carousel-item>
        }
      </c-carousel-inner>
    </c-carousel>
  </div>
    
  `,
  styles: ``,
})
export class HomeCarouselComponent implements OnInit {
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
  const images = ['Arp%20Racing/Carousel/IMG_8782i.jpg', 'Arp%20Racing/Carousel/IMG_8904i.jpg', 'Arp%20Racing/Carousel/IMG_8777.jpg'];

  this.slides = images.map(name => ({
    src: `${name}`
  }));
}
  

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
