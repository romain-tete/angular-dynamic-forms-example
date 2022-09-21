import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  DYNAMIC_CONTROL_CONFIG,
  FieldConfiguration,
} from 'src/app/dynamic-form/dynamic-form.types';

@Component({
  selector: 'material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.scss'],
})
export class MaterialInputComponent {
  constructor(
    public control: FormControl,
    @Inject(DYNAMIC_CONTROL_CONFIG) public config: FieldConfiguration
  ) {}
}
