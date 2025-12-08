import { Component, OnInit } from '@angular/core';
import { CarouselComponent, CarouselInnerComponent, CarouselItemComponent } from '@coreui/angular';
import { NgOptimizedImage } from '@angular/common'
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [CarouselComponent, CarouselInnerComponent, CarouselItemComponent, NgOptimizedImage],
  template: `
  @if (loading) {
    <div class="relative h-screen w-screen bg-black">
      <img
        src="img/carousel/s1.jpg"
        alt="placeholder image"
        fill
        class="h-screen w-full object-cover transition"
        priority="true"
        placeholder
      />    
    </div>
         
  }
  @else if (error) {
    <div class="text-red-500">{{error}}</div>
  }
  @else {
    <div class="h-screen w-screen bg-black">
      <c-carousel [interval]="5000" transition="slide" class="relative h-screen">
        <c-carousel-inner class="relative h-full">
          @for (slide of slides; track slide.src) {
            <c-carousel-item class="relative h-full">
              <img
                ngSrc="Arp%20Racing/Carousel/{{slide.src}}"
                alt="{{slide.title}}"
                fill
                class="h-screen w-full object-cover transition"
                priority="true"
                placeholder
              />
            </c-carousel-item>
          }
        </c-carousel-inner>
      </c-carousel>
    </div>
  }
  `,
  styles: ``,
})
export class HomeCarouselComponent implements OnInit {
  slides: any[] = new Array().fill({src: ''});
  loading = false;
  error: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loading = true;
    this.apiService.getCarouselImages().subscribe({
      next: (data) => {
        this.slides = data.files.map((file: string) => ({ src: file }));
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load users';
        this.loading = false;
      }
    });
  }
}
