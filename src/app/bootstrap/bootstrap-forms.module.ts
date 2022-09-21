import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapInputComponent } from './forms/bootstrap-input/bootstrap-input.component';
import { BootstrapAddressComponent } from './forms/bootstrap-address/bootstrap-address.component';
import { BootstrapFormsRoutingModule } from './bootstrap-forms-routing.module';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapDemoComponent } from './bootstrap-demo.component';

@NgModule({
  declarations: [
    BootstrapDemoComponent,
    BootstrapInputComponent,
    BootstrapAddressComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    BootstrapFormsRoutingModule,
    DynamicFormModule.configure({
      text: {
        componentType: BootstrapInputComponent,
        controlFactory: (value?: string) => new FormControl(),
        controlType: 'field',
      },
      address: {
        componentType: BootstrapAddressComponent,
        controlFactory: (value?: any) =>
          new FormGroup({
            address1: new FormControl(),
            address2: new FormControl(),
          }),
        controlType: 'group',
      },
    }),
  ],
})
export class BootstrapFormsModule {}
