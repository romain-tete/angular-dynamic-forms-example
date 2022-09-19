import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text/text.component';
import { AddressComponent } from './address/address.component';
import { Config2RoutingModule } from './routing.module';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { FormControl, FormGroup } from '@angular/forms';
import { Config2IndexComponent } from './index.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [Config2IndexComponent, TextComponent, AddressComponent],
  imports: [
    CommonModule,
    NgbModule,
    Config2RoutingModule,
    DynamicFormModule.forRoot({
      text: {
        type: TextComponent,
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
export class Config2Module {}
