import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
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
        @for (item of folderKeys; track $index) {
          <div class="relative m-10 w-90 h-60 overflow-hidden" (click)="onFolderClick(item)">
            <p class="absolute inset-0 mb-0 flex items-center justify-center text-white font-bold text-center bg-black bg-opacity-50 z-10 hover:scale-130 transition">
              {{item}}
            </p>
            <img ngSrc="Arp%20Racing/library/{{item}}/{{folders.get(item)}}" alt="{{item}} picture" loading="lazy" width="360" height="240" class="object-cover object-center">
          </div>
        }
      </div>
    }
  `,
  styles: ``,
})
export class LibraryComponent {
  folders: Map<string, string>= new Map().set('','');
  loading = false;
  error: string | null = null;
  folderKeys: string[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.loading = true;
    this.apiService.getLibrary().subscribe({
      next: (data) => {
        this.folders = new Map(Object.entries(data.data)); // convert object → Map
        this.folderKeys = Array.from(this.folders.keys());
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load library';
        this.loading = false;
      }
    });
  }

  onFolderClick(folder: string) {
    // Handle the click event here
    this.router.navigate(['/archive', folder]);
  }
}
