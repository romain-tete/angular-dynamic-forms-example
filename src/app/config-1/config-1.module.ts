import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Config1TextComponent } from './text/text.component';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { Config1RoutingModule } from './routing.module';
import { Config1IndexComponent } from './index.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [Config1IndexComponent, AddressComponent, Config1TextComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    Config1RoutingModule,
    DynamicFormModule.forRoot({
      text: {
        type: Config1TextComponent,
        controlFactory: (value?: string) => new FormControl(),
        is_container: false,
      },
      address: {
        type: AddressComponent,
        controlFactory: (value?: any) =>
          new FormGroup({
            address1: new FormControl(),
            address2: new FormControl(),
          }),
        is_container: true,
      },
    }),
  ],
})
export class Config1Module {}
