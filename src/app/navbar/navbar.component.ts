import { Component, inject } from '@angular/core';
import { DarkModeService } from '../services/dark-mode.service';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbCollapseModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  // Step 1:
	// Create a property to track whether the menu is open.
	// Start with the menu collapsed so that it does not
	// appear initially when the page loads on a small screen!
	isMenuCollapsed = true;
  darkModeService: DarkModeService =inject(DarkModeService);

  toggleDarkMode(){
    this.darkModeService.updateDarkMode();
  }
}
