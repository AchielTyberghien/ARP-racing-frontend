import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { ApiService } from '../../services/api.service';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-archive',
  imports: [HeaderComponent, NgOptimizedImage],
  template: `
    <app-header></app-header>
    @if (loading) {
      <!-- <div>Loading library...</div> -->
    }
    @else if (error) {
      <div class="text-red-500">{{error}}</div>
    }
    @else {
      <div class="flex flex-wrap justify-center">
        @for (item of slides; track $index) {
          <div class="relative m-7 w-120 h-80 overflow-hidden">
            <img ngSrc="Arp%20Racing/library/{{userId}}/{{item.src}}" alt="{{userId}} picture" loading="lazy" width="480" height="320" class="object-cover object-center">
          </div>
        }
      </div>
    }
  `,
  styles: ``,
})
export class ArchiveComponent implements OnInit {
  userId: string | null = '';
  slides: any[] = new Array().fill({src: ''});
  loading = false;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
    });
    console.log('Archive for user:', this.userId);
    this.loading = true;
    this.apiService.getEventPictures(this.userId || '').subscribe({
      next: (data) => {
        console.log('Received data:', data);
        this.slides = data.data.map((file: string) => ({ src: file }));
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load event pictures';
        this.loading = false;
      }
    });
  }
}