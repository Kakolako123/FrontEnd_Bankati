import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import confetti from 'canvas-confetti';


@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.css'
})
export class DonationComponent {
  currentStep: number = 0;
// Add the missing properties
  selectedCompany: string;
  donationAmount: number;

  constructor() {
    // Initialize the properties if necessary
    this.selectedCompany = '';
    this.donationAmount = 0;
  }

  nextStep() {
    if (this.currentStep < 2) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  finish() {
    // Afficher l'alerte ou le message de confirmation
    alert('Félicitations ! Votre donation est complétée.');

    // Déclencher les confettis
    this.launchConfetti();
  }

  // Fonction pour lancer les confettis
  launchConfetti() {
    // Effet de confettis
    confetti({
      particleCount: 100,  // Nombre de particules
      spread: 70,          // Étendue de la dispersion des confettis
      origin: { x: 0.5, y: 0.5 }, // Position du centre de l'écran
      colors: ['#ff0000', '#00ff00', '#0000ff'], // Couleurs des confettis
    });
  }
}
