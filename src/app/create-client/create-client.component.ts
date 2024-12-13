import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class CreateClientComponent implements OnInit {
  clientForm: FormGroup;
  client: any = {};
  email: string = '';

  constructor(private fb: FormBuilder, public router: Router) {
    this.clientForm = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      cin: ['', Validators.required],
      num_piece_identite: ['', Validators.required],
      birthdate: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      commercialRn: [''],
      patent: [''],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.clientForm.valid) {
      console.log(this.clientForm.value);
      // Add your submission logic here
    }
  }

  cancel() {
    this.clientForm.reset();
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    // Handle file upload logic here
  }
}
