import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';

@Component({
  selector: 'app-about',
  imports: [TitleComponent, ToolbarComponent],
  template: `
    <div class="p-2 top-0 left-0 w-full bg-black" >
      <app-title title="ARP Racing Photography"/>
      <app-toolbar/>
    </div>
    <div class="flex p-10">
      <div>
        <img src="img/about/portret.jpg" alt="portret" class="w-60 h-60 rounded-full mx-auto mt-4"/>
      </div>
      <div>
        <p class="text-center text-lg mt-4 mx-4">
          Welcome to ARP Racing Photography! I'm Achiel, a passionate motorsport photographer dedicated to capturing the thrill and excitement of racing events.
      </div>
    </div>
  `,
  styles: ``,
})
export class AboutComponent {

}
