import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  public password: string = '123456789';
  public passwordFieldType: string = 'password';
  termsAccepted: boolean = false;
  SignUpOptions = [
    {
      image: 'assets/images/authentication/google.svg',
      name: 'Google'
    },
    {
      image: 'assets/images/authentication/twitter.svg',
      name: 'Twitter'
    },
    {
      image: 'assets/images/authentication/facebook.svg',
      name: 'Facebook'
    }
  ];
  constructor() {
    console.log("Component Loaded");
  }
  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
  onSubmit() {
    if (this.termsAccepted) {
      console.log('Form submitted');
    } else {
      console.log('You must accept the terms and conditions to proceed.');
    }
  }
}
