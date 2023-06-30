/**
 * This file is needed for the StackBlitz demo only.
 * It is automatically provided when using the Angular CLI.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import '@skyux/packages/polyfills';

import 'zone.js';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
