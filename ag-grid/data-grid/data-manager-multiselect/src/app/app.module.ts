import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkyAppLocaleProvider } from '@skyux/i18n';
import { SkyThemeService } from '@skyux/theme';

import { of as observableOf } from 'rxjs';

import { AppComponent } from './app.component';
import { SkyDataManagerMultiselectDataGridDocsDemoModule } from './data-manager-multiselect-data-grid-docs-demo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SkyDataManagerMultiselectDataGridDocsDemoModule,
  ],
  providers: [
    SkyThemeService,
    {
      provide: SkyAppLocaleProvider,
      useValue: {
        getLocaleInfo: () =>
          observableOf({
            locale: 'en-US',
          }),
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
