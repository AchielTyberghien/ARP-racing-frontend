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
    <div class="bg-neutral-200 min-h-screen flex flex-col">
      <app-header></app-header>
      <main class="flex-1 p-3">
        <div class="flex justify-center flex-wrap p-15">
          @if (loading) {
            <app-loading message="Sending message..."></app-loading>
          }
          @else if (send) {
            <div class="flex flex-col items-center justify-center gap-4">
                
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

                
                <p class="text-lg font-medium text-green-600 text-center">
                  Your message has been sent successfully
                </p>
              </div>
          }
          @else {
          <form
            cForm
            class="w-150"
            [formGroup]="contactForm"
            (ngSubmit)="submit()"
          >
            <!-- Name  -->
            <div class="mb-3">
              <label cLabel>Name</label>
              <input
                cFormControl
                type="text"
                formControlName="name"
                placeholder="Your name"
              />
              @if (isInvalid('name')) {
                <p class="text-red-600 text-sm">
                  Please enter a valid name
                </p>
              }
              
            </div>

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
    private apiService: ApiService
  ) {}

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
        alert('Failed to send message');
      }
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.invalid && control.touched);
  }
}
