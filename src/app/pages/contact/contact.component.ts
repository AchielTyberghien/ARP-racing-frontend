import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import {
  FormControlDirective,
  FormDirective,
  FormLabelDirective
} from '@coreui/angular';
import { ApiService } from '../../services/api.service';
import { LoadingComponent } from "../../components/loading/loading.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    HeaderComponent,
    ReactiveFormsModule,
    FormDirective,
    FormLabelDirective,
    FormControlDirective,
    LoadingComponent,
    FooterComponent
],
  template: `
    <div class="min-h-screen flex flex-col bg-neutral-100">

      <app-header></app-header>

      <main class="flex-1 px-4 sm:px-6 lg:px-10 py-10">
        <div class="flex justify-center">

          @if (loading) {
            <div class="flex items-center justify-center min-h-[400px]">
              <app-loading message="Sending message..." />
            </div>
          }

          @else if (send) {
            <div class="flex flex-col items-center justify-center gap-6 min-h-[400px]">

              <div class="flex h-20 w-20 items-center justify-center rounded-full bg-green-600">
                <svg
                  class="h-12 w-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <p class="text-lg font-semibold text-green-600 text-center">
                Your message has been sent successfully
              </p>

              <p class="text-sm text-neutral-500 text-center max-w-md">
                Thank you for reaching out. I’ll get back to you as soon as possible.
              </p>

            </div>
          }

          @else {
            <form
              cForm
              class="w-full max-w-xl bg-neutral-100 rounded-xl shadow-lg p-8"
              [formGroup]="contactForm"
              (ngSubmit)="submit()"
            >

              <!-- Name -->
              <div class="mb-5">
                <label cLabel class="mb-1 block font-medium">Name</label>
                <input
                  cFormControl
                  type="text"
                  formControlName="name"
                  placeholder="Your name"
                />
                @if (isInvalid('name')) {
                  <p class="text-red-600 text-sm mt-1">
                    Please enter a valid name
                  </p>
                }
              </div>

              <!-- Email -->
              <div class="mb-5">
                <label cLabel class="mb-1 block font-medium">Email address</label>
                <input
                  cFormControl
                  type="email"
                  formControlName="email"
                  placeholder="name@example.com"
                />
                @if (isInvalid('email')) {
                  <p class="text-red-600 text-sm mt-1">
                    Please enter a valid email address
                  </p>
                }
              </div>

              <!-- Subject -->
              <div class="mb-5">
                <label cLabel class="mb-1 block font-medium">Subject</label>
                <input
                  cFormControl
                  type="text"
                  formControlName="subject"
                  placeholder="Subject"
                />
                @if (isInvalid('subject')) {
                  <p class="text-red-600 text-sm mt-1">
                    Subject is required
                  </p>
                }
              </div>

              <!-- Message -->
              <div class="mb-6">
                <label cLabel class="mb-1 block font-medium">Message</label>
                <textarea
                  cFormControl
                  rows="4"
                  formControlName="message"
                  placeholder="Your message..."
                ></textarea>
                @if (isInvalid('message')) {
                  <p class="text-red-600 text-sm mt-1">
                    Message is required
                  </p>
                }
              </div>

              <!-- Submit -->
              <div class="flex justify-center ">
                <div class=" bg-blue-500 rounded-3xl hover:bg-blue-600 transition-colors duration-300">
                  <button
                    class="px-6 py-2  text-white font-medium "
                    type="submit"
                    [disabled]="contactForm.invalid || loading"
                  >
                    {{ loading ? 'Sending...' : 'Send message' }}
                  </button>
                </div>
                
              </div>

            </form>
          }

        </div>
      </main>

      <app-footer></app-footer>

    </div>

  `
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  loading = false;
  send = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.titleService.setTitle('Contact - ARP Racing Photography');
    this.metaService.updateTag({
      name: 'description',
      content: 'Get in touch with ARP Racing Photography for inquiries, bookings, or collaborations. Use our contact form to reach out and capture the thrill of motorsport events together.'
    });
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
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
        alert('Something went wrong while sending your message. Please try again later or contact me directly at info.arpracing@gmail.com');
      }
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.invalid && control.touched);
  }
}
