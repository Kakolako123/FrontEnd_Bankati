import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterLink, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  currentPassword = '';
  newPassword = '';
  confirmPassword = '';

  constructor(private http: HttpClient) {}

  onChangePassword() {
    if (this.newPassword !== this.confirmPassword) {
      // Handle password mismatch
      return;
    }

    this.http.post('/api/change-password', {
      currentPassword: this.currentPassword,
      newPassword: this.newPassword,
    }).subscribe(
      (response) => {
        // Handle successful password change
        console.log('Password changed successfully:', response);
        // Redirect or show success message
      },
      (error) => {
        // Handle errors (e.g., incorrect current password, server error)
        console.error('Error changing password:', error);
        // Show error message to the user
      }
    );
  }
}
