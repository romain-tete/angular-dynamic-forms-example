import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { MaterialFormsRoutingModule } from './material-forms-routing.module';
import { MaterialShowroomComponent } from './components/material-showroom.component';
import { MaterialAddressComponent } from './forms/material-address/material-address.component';
import { MaterialInputComponent } from './forms/material-input/material-input.component';

@NgModule({
  declarations: [
    MaterialShowroomComponent,
    MaterialAddressComponent,
    MaterialInputComponent,
  ],
  imports: [
    CommonModule,

    MatInputModule,
    MatFormFieldModule,

    ReactiveFormsModule,
    MaterialFormsRoutingModule,
    DynamicFormModule.configure({
      text: {
        type: MaterialInputComponent,
        controlFactory: (value?: string) => new FormControl(),
        controlType: 'field',
      },
      address: {
        type: MaterialAddressComponent,
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
export class MaterialFormsModule {}
