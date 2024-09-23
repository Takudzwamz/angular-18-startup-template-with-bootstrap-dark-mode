import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  darkModeSignal = signal<string | null>(null);

  constructor() {
    // Check if the window object is available (i.e., client-side rendering)
    if (this.isBrowser()) {
      const storedValue = window.localStorage.getItem('darkModeSignal');
      this.darkModeSignal.set(storedValue ? JSON.parse(storedValue) : 'null');

      effect(() => {
        window.localStorage.setItem('darkModeSignal', JSON.stringify(this.darkModeSignal()));
      });
    }
  }

  updateDarkMode() {
    this.darkModeSignal.update((value) => (value === "dark" ? "null" : "dark"));
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }
}

