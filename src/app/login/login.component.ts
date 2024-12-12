import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    if (!this.username || !this.password) {
      console.error('Please fill in all fields');
      return;
    }

    console.log('Login attempt with:', {
      username: this.username,
      password: this.password
    });
  }
}
