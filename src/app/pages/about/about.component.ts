import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-about',
  imports: [HeaderComponent],
  template: `
  <div class="max-h-screen">
    <app-header></app-header>
    <div class="flex p-5">
      <div class="h-75">
        <img src="img/about/portret.jpg" alt="portret" class="p-5 mt-4 rounded-full"/>
      </div>
      <div class=" p-5 bg-gray-500 rounded-lg">
        <p class="text-center text-lg mt-4 mx-4">
          Welcome to ARP Racing Photography! I'm Achiel, a passionate motorsport photographer dedicated to capturing the thrill and excitement of racing events.
      </div>
    </div>
  </div>
    
  `,
  styles: ``,
})
export class AboutComponent {

}