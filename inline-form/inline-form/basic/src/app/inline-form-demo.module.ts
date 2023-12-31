import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SkyInputBoxModule } from '@skyux/forms';
import { SkyIconModule } from '@skyux/indicators';
import { SkyInlineFormModule } from '@skyux/inline-form';

import { InlineFormDemoComponent } from './inline-form-demo.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SkyIconModule,
    SkyInlineFormModule,
    SkyInputBoxModule,
  ],
  exports: [InlineFormDemoComponent],
  declarations: [InlineFormDemoComponent],
})
export class InlineFormDemoModule {}
