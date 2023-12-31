import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkyCheckboxModule, SkyInputBoxModule } from '@skyux/forms';
import { SkyToolbarModule } from '@skyux/layout';
import { SkyFilterModule, SkyRepeaterModule } from '@skyux/lists';

import { FilterDemoComponent } from './filter-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SkyCheckboxModule,
    SkyInputBoxModule,
    SkyFilterModule,
    SkyRepeaterModule,
    SkyToolbarModule,
  ],
  declarations: [FilterDemoComponent],
  exports: [FilterDemoComponent],
})
export class FilterDemoModule {}
