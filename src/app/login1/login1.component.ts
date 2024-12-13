// @ts-ignore
import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-login1',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,   // Ajoutez FormsModule
    RouterModule,  // Ajoutez RouterModule
  ],
  templateUrl: './login1.component.html',
  styleUrl: './login1.component.css'
})
export class Login1Component {
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
