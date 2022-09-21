import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlTypesMappings,
  DYNAMIC_FORM_MAPPING,
} from './dynamic-form.types';
import { MyFormComponent } from './dynamic-form.component';
import { MyFormControlDirective } from './dynamic-form-control.directive';

@NgModule({
  declarations: [MyFormComponent, MyFormControlDirective],
  imports: [CommonModule],
  exports: [MyFormComponent],
})
export class DynamicFormModule {
  static configure(
    config: ControlTypesMappings = {}
  ): ModuleWithProviders<DynamicFormModule> {
    return {
      ngModule: DynamicFormModule,
      providers: [{ provide: DYNAMIC_FORM_MAPPING, useValue: config }],
    };
  }
}
