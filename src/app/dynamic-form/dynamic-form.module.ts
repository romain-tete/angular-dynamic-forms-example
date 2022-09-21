import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlTypesMappings,
  DYNAMIC_FORM_MAPPING,
} from './dynamic-form.types';
import { MyFormComponent } from './directives/dynamic-form/dynamic-form.component';
import { MyFormControlDirective } from './directives/dynamic-form-control.directive';
import { ShowroomComponent } from './directives/showroom/showroom.component';

@NgModule({
  declarations: [MyFormComponent, MyFormControlDirective, ShowroomComponent],
  imports: [CommonModule],
  exports: [MyFormComponent, ShowroomComponent],
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
