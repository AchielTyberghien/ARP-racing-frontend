import { Component, OnInit } from '@angular/core';
import { CarouselComponent, CarouselInnerComponent, CarouselItemComponent } from '@coreui/angular';
import { NgOptimizedImage } from '@angular/common'
import { ApiService } from '../../services/api.service';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [CarouselComponent, CarouselInnerComponent, CarouselItemComponent, NgOptimizedImage, LoadingComponent],
  template: `
  @if (loading) {
  <div class="relative h-screen w-screen bg-black flex items-center justify-center">
    <app-loading message="Loading carousel..." />
  </div>
  } 
  @else if (error) {
    <div class="h-screen w-screen flex items-center justify-center bg-black text-red-500 text-lg font-semibold">
      {{ error }}
    </div>
  } 
  @else {
    <div class="h-screen w-screen bg-black relative">
      <c-carousel [interval]="7000" transition="slide" class="relative h-screen w-full">
        <c-carousel-inner class="relative h-full w-full">
          @for (slide of slides; track slide.src) {
            <c-carousel-item class="relative h-full w-full">
              <img
                ngSrc="Arp Racing/Carousel/{{slide.src}}"
                alt="{{slide.description}}"
                fill
                class="h-screen w-full object-cover transition-transform duration-700 ease-in-out"
                priority
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
        this.slides = data.pictures.map((picture: {name: string, description: string}) => ({ src: picture.name, description: picture.description }));
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load users';
        this.loading = false;
      }
    });
  }
}
