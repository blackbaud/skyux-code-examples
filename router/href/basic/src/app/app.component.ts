/**
 * This file is needed for the StackBlitz demo only.
 * It is automatically provided when using the Angular CLI.
 */
import { Component, Renderer2 } from '@angular/core';
import {
  SkyTheme,
  SkyThemeMode,
  SkyThemeService,
  SkyThemeSettings,
} from '@skyux/theme';

@Component({
  selector: 'app-root',
  template: '<app-sky-href-demo></app-sky-href-demo>',
})
export class AppComponent {
  constructor(themeSvc: SkyThemeService, renderer: Renderer2) {
    const themeSettings = new SkyThemeSettings(
      SkyTheme.presets['modern'],
      SkyThemeMode.presets.light
    );

    themeSvc.init(document.body, renderer, themeSettings);
  }
}
