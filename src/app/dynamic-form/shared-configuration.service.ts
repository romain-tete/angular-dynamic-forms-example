import { Injectable } from '@angular/core';
import { FieldConfiguration } from './dynamic-form.types';

@Injectable({
  providedIn: 'root',
})
export class SharedConfiguration {
  getConfiguration(): FieldConfiguration[] {
    return [
      {
        name: 'full_name',
        type: 'text',

        viewOptions: {
          label: 'Full Name',
          placeholder: 'John Do...',
        },
      },
      {
        name: 'zipcode',
        type: 'text',

        viewOptions: {
          label: 'Zipcode',
          placeholder: '01230',
        },

        validators: {
          valueType: 'numeric',
          length: 5,
        },
      },
      {
        name: 'address',
        type: 'address',
        viewOptions: {
          label: 'Address',
        },
      },
    ];
  }
}
