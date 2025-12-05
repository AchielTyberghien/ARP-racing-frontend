import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-about',
  imports: [HeaderComponent],
  template: `
    <app-header></app-header>
    <div class="h-screen flex p-10">
      <div class="w-75">
        <img src="img/about/portret.jpg" alt="portret" class=" p-5 mx-auto mt-4 h-screen rounded-full"/>
      </div>
      <div class="bg-gray-500 rounded-lg">

        <p class="text-center text-lg mt-4 mx-4">
          Welcome to ARP Racing Photography! I'm Achiel, a passionate motorsport photographer dedicated to capturing the thrill and excitement of racing events.
      </div>
    </div>
  `,
  styles: ``,
})
export class AboutComponent {

}
