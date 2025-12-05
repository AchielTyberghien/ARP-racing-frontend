import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormControlDirective, FormDirective, FormLabelDirective } from '@coreui/angular';

@Component({
  selector: 'app-contact',
  imports: [HeaderComponent,ReactiveFormsModule,
    FormsModule,
    FormDirective,
    FormLabelDirective,
    FormControlDirective],
  template: `
    <app-header></app-header>
    <div class="flex justify-center">
      <h2 class="w-150 py-4">Contact</h2>
    </div>
    <div class="flex justify-center flex-wrap">
      <form cForm class="w-150">
        <div class="mb-3">
          <label cLabel for="exampleFormControlInput1">Email address</label>
          <input cFormControl
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                type="email"
          />
        </div>
        <div class="mb-3">
          <label cLabel for="exampleFormControlInput2">Subject</label>
          <input cFormControl
                id="exampleFormControlInput2"
                placeholder="Subject"
                type="text"
          />
        </div>
        <div class="mb-3">
          <label cLabel for="exampleFormControlTextarea1">Example textarea</label>
          <textarea cFormControl id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
    </div>
    <div class="flex justify-center ">
      <button class=" bg-blue-500 text-white px-4 py-2 rounded" type="submit">Send</button>
    </div>
  `,
  styles: ``,
})
export class ContactComponent {

}
