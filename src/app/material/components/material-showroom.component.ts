import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldConfiguration } from '../../dynamic-form/dynamic-form.types';

@Component({
  selector: 'config-1-index',
  template: `<my-form
    [config]="config"
    (valueChanges)="onValueChange($event)"
  ></my-form>`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialShowroomComponent {
  config: FieldConfiguration[] = [
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

  onValueChange(value: any): void {
    console.log(value);
  }
}
