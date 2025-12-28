import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import {
  FormControlDirective,
  FormDirective,
  FormLabelDirective
} from '@coreui/angular';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    HeaderComponent,
    ReactiveFormsModule,
    FormDirective,
    FormLabelDirective,
    FormControlDirective
  ],
  template: `
    

    <div class="bg-neutral-200 h-screen">
      <app-header></app-header>
      <div class="flex justify-center">
        <h2 class="w-150 py-4 text-2xl font-bold">Contact</h2>
      </div>
      <div class="flex justify-center flex-wrap">
        @if (loading) {
          <p>Sending message...</p>
        }
        @else if (send) {
          <p class="text-green-600">Message sent successfully!</p>
        }
        @else {
        <form
          cForm
          class="w-150"
          [formGroup]="contactForm"
          (ngSubmit)="submit()"
        >

          <!-- Email  -->
          <div class="mb-3">
            <label cLabel>Email address</label>
            <input
              cFormControl
              type="email"
              formControlName="email"
              placeholder="name@example.com"
            />
            @if (isInvalid('email')) {
              <p class="text-red-600 text-sm">
                Please enter a valid email address
              </p>
            }
            
          </div>

          <!-- Subject -->
          <div class="mb-3">
            <label cLabel>Subject</label>
            <input
              cFormControl
              type="text"
              formControlName="subject"
              placeholder="Subject"
            />
            @if (isInvalid('subject')) {
              <p class="text-red-600 text-sm">
                Subject is required
              </p>
            }
          </div>

           <!-- Message  -->
          <div class="mb-3">
            <label cLabel>Message</label>
            <textarea
              cFormControl
              rows="4"
              formControlName="message"
            ></textarea>
            @if (isInvalid('message')) {
              <p class="text-red-600 text-sm">
                Message is required
              </p>
            }
          </div>

          <div class="flex justify-center">
            <button
              class="bg-blue-500 text-white px-4 py-2 rounded"
              type="submit"
              [disabled]="contactForm.invalid || loading"
            >
              {{ loading ? 'Sending...' : 'Send' }}
            </button>
          </div>

        </form>
        }
      </div>
      
    </div>
  `
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  loading = false;
  send = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  submit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    this.apiService.sendContactForm(this.contactForm.value).subscribe({
      next: () => {
        this.contactForm.reset();
        this.loading = false;
        this.send = true;
      },
      error: () => {
        this.loading = false;
        alert('Failed to send message');
      }
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.invalid && control.touched);
  }
}
