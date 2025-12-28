import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  imports: [HeaderComponent, NgOptimizedImage],
  template: `
    <div class="h-screen bg-neutral-200">
      <app-header></app-header>
      @if (loading) {
        <!-- <div>Loading library...</div> -->
      }
      @else if (error) {
        <div class="text-red-500">{{error}}</div>
      }
      @else {
        <div class="flex flex-wrap justify-center bg-neutral-200">
          @for (item of folderKeys; track $index) {
            <div class="relative m-10 w-70 h-95 overflow-hidden bg-neutral-300" (click)="onFolderClick(item)">
              <div class="absolute inset-0  z-10 flex items-center">
                <p class="transform -rotate-90 text-xl text-neutral-800 font-bold whitespace-nowrap absolute left-3 top-91 origin-left">
                  {{ item }}
                </p>
              </div>
              <div class="relative mx-4 my-2 w-65 h-95 overflow-hidden">
                <img
                  ngSrc="Arp%20Racing/library/{{item}}/{{folders.get(item)}}"
                  alt="{{item}} picture"
                  loading="lazy"
                  fill
                  class="object-cover object-center"
                >
              </div>
            </div> 
          }
        </div>
      }
    </div>
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
