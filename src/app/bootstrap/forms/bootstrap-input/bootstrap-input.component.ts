import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  FieldConfiguration,
  DYNAMIC_CONTROL_CONFIG,
} from '../../../dynamic-form/dynamic-form.types';

@Component({
  selector: 'bootstrap-input',
  templateUrl: './bootstrap-input.component.html',
  styleUrls: ['./bootstrap-input.component.scss'],
})
export class BootstrapInputComponent {
  constructor(
    public control: FormControl,
    @Inject(DYNAMIC_CONTROL_CONFIG) public config: FieldConfiguration
  ) {}
}
