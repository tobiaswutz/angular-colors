import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styles: [
    `
      .button {
        background-color: var(--primary-color);
      }
    `,
  ],
})
export class AppComponent {
  colors: { name: string; value: string }[] = [
    { name: 'primary', value: '#0c61cf' },
    { name: 'secondary', value: '#9da6b3' },
    { name: 'contrast', value: '#d900ff' },
    { name: 'surface', value: '#ffffff' },
    { name: 'background', value: '#d1dedd' },
    { name: 'error', value: '#7d0000' },
    { name: 'success', value: '#078700' },
    { name: 'warning', value: '#875100' },
    { name: 'info', value: '#007afc' },
  ];

  constructor() {
    this.colors.forEach((color) => {
      this.changeCINIT(color.name, color.value);
    });
  }

  title = 'angular';


  lightShades: number[] = [100, 200, 300, 400];
  darkShades: number[] = [600, 700, 800, 900];

  changeCINIT(color: string, value: string) {


    console.log('changeColor', color, value);


    document.documentElement.style.setProperty(`--${color}-500`, value);
    document.documentElement.style.setProperty(`--text-${color}-500`, this.getTextColor(value));

    this.lightShades.forEach((shade, index) => {
      const factor = (4 - index) * 10;
      document.documentElement.style.setProperty(`--${color}-${shade}`, this.lightenColor(value, factor));
    });

    this.darkShades.forEach((shade, index) => {
      const factor = (index + 1) * 10;
      document.documentElement.style.setProperty(`--${color}-${shade}`, this.darkenColor(value, factor));
    });

    this.lightShades.forEach((shade, index) => {
      const factor = (4 - index) * 10;
      const textColor = this.getTextColor(this.lightenColor(value, factor));
      document.documentElement.style.setProperty(`--text-${color}-${shade}`, textColor);
    });

    this.darkShades.forEach((shade, index) => {
      const factor = (index + 1) * 10;
      const textColor = this.getTextColor(this.darkenColor(value, factor));
      document.documentElement.style.setProperty(`--text-${color}-${shade}`, textColor);
    });
  }

  changeColor(color: string, event: Event) {

    const target = event?.target as HTMLInputElement;
    const value = target.value;

    console.log('changeColor', color, value);


    document.documentElement.style.setProperty(`--${color}-500`, value);
    document.documentElement.style.setProperty(`--text-${color}-500`, this.getTextColor(value));

    this.lightShades.forEach((shade, index) => {
      const factor = (4 - index) * 10;
      document.documentElement.style.setProperty(`--${color}-${shade}`, this.lightenColor(value, factor));
    });

    this.darkShades.forEach((shade, index) => {
      const factor = (index + 1) * 10;
      document.documentElement.style.setProperty(`--${color}-${shade}`, this.darkenColor(value, factor));
    });

    this.lightShades.forEach((shade, index) => {
      const factor = (4 - index) * 10;
      const textColor = this.getTextColor(this.lightenColor(value, factor));
      document.documentElement.style.setProperty(`--text-${color}-${shade}`, textColor);
    });

    this.darkShades.forEach((shade, index) => {
      const factor = (index + 1) * 10;
      const textColor = this.getTextColor(this.darkenColor(value, factor));
      document.documentElement.style.setProperty(`--text-${color}-${shade}`, textColor);
    });
  }

  lightenColor(color: any, percent: any) {
    const num = parseInt(color.replace('#', ''), 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      G = ((num >> 8) & 0x00ff) + amt,
      B = (num & 0x0000ff) + amt;
    return '#' + (0x1000000 + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 + (B < 255 ? (B < 1 ? 0 : B) : 255)).toString(16).slice(1);
  }

  darkenColor(color: any, percent: any) {
    const num = parseInt(color.replace('#', ''), 16),
      amt = Math.round(2.55 * -percent),
      R = (num >> 16) + amt,
      G = ((num >> 8) & 0x00ff) + amt,
      B = (num & 0x0000ff) + amt;
    return '#' + (0x1000000 + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 + (B < 255 ? (B < 1 ? 0 : B) : 255)).toString(16).slice(1);
  }

  getTextColor(color: string): string {

    if (color === '#000000') {
      return '#FFFFFF';
    }
    const rgb = parseInt(color.replace('#', ''), 16);
    const red = (rgb >> 16) & 0xff;
    const green = (rgb >> 8) & 0xff;
    const blue = rgb & 0xff;

    const luma = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;

    const contrastBlack = (luma + 0.05) / 0.05;
    const contrastWhite = (1.05 - luma) / luma;

    return contrastBlack > contrastWhite ? '#000000' : '#FFFFFF';
  }
}
