import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldConfiguration } from '../dynamic-form/dynamic-form.types';

@Component({
  selector: 'config-2-index',
  template: `<my-form
    [config]="config"
    (valueChanges)="onValueChange($event)"
  ></my-form>`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Config2IndexComponent {
  config: FieldConfiguration[] = [
    {
      label: 'Full Name',
      name: 'full_name',
      type: 'text',
      options: { placeholder: 'John Do...' },
    },
    {
      label: 'Zipcode',
      name: 'zipcode',
      type: 'text',
      options: {
        placeholder: '01230',
        valueType: 'numeric',
        length: 5,
      },
    },
    {
      label: 'Address',
      name: 'address',
      type: 'address',
    },
  ];

  onValueChange(value: any): void {
    console.log(value);
  }
}
