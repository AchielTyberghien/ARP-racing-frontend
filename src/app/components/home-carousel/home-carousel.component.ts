import { Component, OnInit } from '@angular/core';
import { CarouselComponent, CarouselInnerComponent, CarouselItemComponent } from '@coreui/angular';

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [CarouselComponent, CarouselInnerComponent, CarouselItemComponent],
  template: `
  <div class="h-screen w-screen bg-black">
    <c-carousel (itemChange)="onItemChange($event)" [interval]="5000" transition="slide">
      <c-carousel-inner>
        @for (slide of slides; track slide.src) {
          <c-carousel-item>
            <img
              [src]="slide.src"
              alt="{{slide.title}}"
              class="flex w-full h-screen object-cover transition"
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
  const images = ['s1.jpg', 's2.jpg', 's3.jpg'];

  this.slides = images.map(name => ({
    src: `img/carousel/${name}`
  }));
}
  

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
