import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import jsPDF from "jspdf";
import { CommonModule, NgClass } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-creancier',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    FormsModule,
    RouterLink
  ],
  templateUrl: './creancier.component.html',
  styleUrl: './creancier.component.css'
})
export class CreancierComponent implements AfterViewInit {

  @ViewChildren('tabButton') tabButtons!: QueryList<ElementRef>;
  @ViewChildren('billerCard') billerCards!: QueryList<ElementRef>;
  categorySelect!: ElementRef;


  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.categorySelect = this.el.nativeElement.querySelector('#category-select');
    this.setupTabs();
    this.setupCategoryFilter();
  }


  setupTabs(): void {
    this.tabButtons.forEach((button) => {
      button.nativeElement.addEventListener('click', () => {
        const tab = button.nativeElement.getAttribute('data-tab');
        // Remove active class from all tabs
        this.tabButtons.forEach((tabButton) =>
          tabButton.nativeElement.classList.remove('active')
        );
        // Add active class to clicked tab
        button.nativeElement.classList.add('active');

        if (tab === 'list') {
          //show all billers by default
          this.billerCards.forEach(card=> card.nativeElement.style.display = '');
        } else {
          //TODO: show historical data
          this.billerCards.forEach(card=> card.nativeElement.style.display = 'none');
        }
      });
    });
  }

  setupCategoryFilter(): void {
    if(this.categorySelect && this.categorySelect.nativeElement){
      this.categorySelect.nativeElement.addEventListener('change', () => {
        const selectedCategory = (this.categorySelect.nativeElement as HTMLSelectElement).value;

        this.billerCards.forEach(card => {
          if (selectedCategory === 'all' || card.nativeElement.getAttribute('data-category') === selectedCategory) {
            card.nativeElement.style.display = '';
          } else {
            card.nativeElement.style.display = 'none';
          }
        });
      });
    }
  }


}
