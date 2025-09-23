import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html'
})
export class NewsletterComponent {
  email: string = '';

  constructor() { }

  onSubmit() {
    if (this.email) {
      console.log('Newsletter subscription:', this.email);
      // Handle newsletter subscription logic here
      this.email = '';
    }
  }
}
