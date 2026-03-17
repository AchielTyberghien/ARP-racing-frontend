import { Component, input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { ApiService } from '../../services/api.service';
import { NgOptimizedImage } from '@angular/common'
import { LoadingComponent } from "../../components/loading/loading.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-archive',
  imports: [HeaderComponent, NgOptimizedImage, LoadingComponent, FooterComponent],
  template: `
  <div class="min-h-screen bg-neutral-200 flex flex-col">
    <app-header></app-header>
    <main class="flex-1 p-3">
      @if (loading) {
        <!-- <div>Loading library...</div> -->
        <app-loading message=""></app-loading>
      }
      @else if (error) {
        <div class="text-red-500">{{error}}</div>
      }
      @else {
        <div class="flex flex-wrap justify-center">
          @for (item of slides; track $index) {
            <div class="relative m-7 w-120 h-80 overflow-hidden flex items-center justify-center" (click)="openImage(item)">
              <img ngSrc="Arp%20Racing/library/{{eventName()}}/{{item.src}}" alt="{{item.description}}" priority width="480" height="320" class="object-contain object-center w-full h-full">
            </div>
          }
        </div>

        @if (selectedImage) {
          <div class="fixed inset-0 bg-black/80 flex items-center justify-center z-40">
            
            <button
              class="absolute top-4 right-4"
              (click)="closeImage()"
            >
            <p class="text-white text-6xl font-light leading-none">×</p>
              
            </button>

            <div class="relative w-[90vw] h-[90vh] flex items-center justify-center">
              <img
                [ngSrc]="'Arp%20Racing/library/' + eventName() + '/' + selectedImage.src"
                fill
                class="object-contain"
                alt="{{selectedImage.description}}"
              />
            </div>

          </div>
        }
      }
    </main>
    <app-footer></app-footer>
  </div>
  `,
  styles: ``,
})
export class ArchiveComponent implements OnInit {
  eventName =  input<string>('');
  slides: any[] = new Array().fill({src: ''});
  loading = false;
  error: string | null = null;
  selectedImage: {src: string, description: string} | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private titleService: Title, private metaService: Meta) {}
  
  ngOnInit() {
    this.titleService.setTitle(`Archive ${this.eventName()} - ARP Racing Photography`);
    this.metaService.updateTag({
      name: 'description',
      content: 'Browse the archive of ARP Racing Photography, featuring a comprehensive collection of high-speed motorsport images capturing the thrill and excitement of racing events.'
    });
    this.loading = true;
    this.apiService.getEventPictures(this.eventName() || '').subscribe({
      next: (data) => {
        this.slides = data.pictures.map((file: {name: string, description: string}) => ({ src: file.name, description: file.description }));
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load event pictures';
        this.loading = false;
      }
    });
  }

  openImage(img: {src: string, description: string}) {
  this.selectedImage = img;
}

  closeImage() {
    this.selectedImage = null;
  }
}