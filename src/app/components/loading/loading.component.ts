import { Component, input } from '@angular/core';

@Component({
  selector: 'app-loading',
  imports: [],
  template: `
  <div class="flex flex-col items-center justify-center gap-4">
    <p class="text-sm  text-center">
      {{ message() }}
    </p>

    <div
      class="h-12 w-12 animate-spin rounded-full border-4 border-gray-600 border-t-gray-200">
    </div>
  </div>

  `,
  styles: ``,
})
export class LoadingComponent {
  message = input('');
}
