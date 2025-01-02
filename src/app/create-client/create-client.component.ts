import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Client } from '../interfaces/client.interface';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class CreateClientComponent implements OnInit {
  clientForm: FormGroup;
  clients: Client[] = []; // Array to hold client data
  editingClient: Client | null = null; // Currently edited client
  showFormModal: boolean = false; // Flag to show/hide the modal form
  email: string = ''; // Confirmation email for form
  selectedFile: File[] = [];
  constructor(private fb: FormBuilder) {
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
    // Sample data for demonstration (replace with service call)
    this.clients = [
      { id: 1, lastName: 'Doe', firstName: 'John', cin: 'CIN', num_piece_identite: '12345', birthdate: '1990-01-01', address: 'Example Address 1', email: 'john.doe@example.com', telephone: '123-456-7890', commercialRn: 'RN123', patent: 'PT456', description: 'Example description 1' },
      { id: 2, lastName: 'Smith', firstName: 'Jane', cin: 'Passport', num_piece_identite: '67890', birthdate: '1995-05-05', address: 'Example Address 2', email: 'jane.smith@example.com', telephone: '987-654-3210', commercialRn: 'RN789', patent: 'PT012', description: 'Example description 2' },
    ];
  }

  addClient(): void {
    this.editingClient = null; // Reset for adding new client
    this.clientForm.reset(); // Clear form
    this.showFormModal = true; // Open the modal
  }

  editClient(client: Client): void {
    this.editingClient = { ...client };
    this.clientForm.patchValue(client); // Fill the form for update
    this.showFormModal = true;
  }

  deleteClient(client: Client): void {
    if (confirm('Are you sure you want to delete this client?')) {
      this.clients = this.clients.filter(c => c.id !== client.id);
    }
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      const newClient = { ...this.clientForm.value };
      if (this.editingClient) {
        // Update existing client
        newClient.id = this.editingClient.id;
        const index = this.clients.findIndex(c => c.id === newClient.id);
        if (index > -1) {
          this.clients[index] = newClient;
        }
      } else {
        // Create a new client
        newClient.id = this.clients.length > 0 ? Math.max(...this.clients.map(c => c.id || 0)) + 1 : 1;
        this.clients.push(newClient);
      }

      this.closeModal();
    }
  }

  closeModal(): void {
    this.showFormModal = false;
    this.editingClient = null;
    this.clientForm.reset();
  }
  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    this.selectedFile = Array.from(files);
  }

  cancel(): void {
    this.clientForm.reset();
    this.closeModal();
  }
}
