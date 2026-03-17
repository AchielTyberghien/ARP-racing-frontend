import { Component, input } from '@angular/core';

@Component({
  selector: 'app-loading',
  imports: [],
  template: `
  <div class="flex flex-col items-center justify-center gap-6 h-full w-full">
      
      <p class="text-sm text-center text-gray-200">
        {{ message() }}
      </p>

      <div 
        class="h-12 w-12 animate-spin rounded-full border-4 border-gray-600 border-t-red-500"
        role="status"
        aria-label="Loading">
      </div>

    </div>

  `,
  styles: ``,
})
export class LoadingComponent {
  message = input('');
}
