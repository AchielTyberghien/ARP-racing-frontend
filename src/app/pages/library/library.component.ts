import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { LoadingComponent } from "../../components/loading/loading.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-library',
  imports: [HeaderComponent, NgOptimizedImage, LoadingComponent, FooterComponent],
  template: `
    <div class="min-h-screen flex flex-col bg-neutral-100">
  
  <!-- Header -->
  <app-header></app-header>
  
  <!-- Main content -->
  <main class="flex-1 p-6">
    
    @if (loading) {
      <div class="flex items-center justify-center h-full">
        <app-loading message="Loading library..." />
      </div>
    }
    @else if (error) {
      <div class="flex items-center justify-center h-full text-red-600 text-lg font-semibold">
        {{ error }}
      </div>
    }
    @else {
      <div class="flex flex-wrap justify-center gap-8 bg-neutral-100 py-4">
        @for (item of folderKeys; track $index) {
          <div 
            class="relative w-72 h-96 rounded-xl shadow-lg overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
            (click)="onFolderClick(item)">
            
            <!-- Rotated folder label -->
            <div class="absolute inset-0 z-10 flex justify-center  pointer-events-none">
              <p class="absolute bottom-6 transform -translate-y-1/2 text-lg font-bold text-neutral-600 bg-neutral-100 shadow-lg rounded-3xl p-1 px-2 whitespace-nowrap">
                {{ item }}
              </p>
            </div>

            <!-- Folder image -->
            <div class="relative w-full h-full">
              <img
                ngSrc="Arp%20Racing/library/{{item}}/{{folders.get(item)}}"
                alt="{{item}} picture"
                fill
                class="object-cover object-center"
                priority
              />
              <!-- Optional overlay on hover -->
              <div class="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>

          </div>
        }
      </div>
    }

  </main>

  <!-- Footer -->
  <app-footer></app-footer>

</div>

  `,
  styles: ``,
})
export class LibraryComponent {
  folders: Map<string, string>= new Map().set('','');
  loading = false;
  error: string | null = null;
  folderKeys: string[] = [];
  constructor(private titleService: Title, private metaService: Meta, private apiService: ApiService, private router: Router) {
    this.titleService.setTitle('Library - ARP Racing Photography');
    this.metaService.updateTag({
      name: 'description',
      content: 'Browse the library of ARP Racing Photography, featuring categorized collections of high-speed motorsport images capturing the thrill and excitement of racing events.'
    });
  }
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
