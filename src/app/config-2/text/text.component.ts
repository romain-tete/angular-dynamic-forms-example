import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  FieldConfiguration,
  DYNAMIC_CONTROL_CONFIG,
} from '../../dynamic-form/dynamic-form.types';

@Component({
  selector: 'config-2-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent {
  constructor(
    public control: FormControl,
    @Inject(DYNAMIC_CONTROL_CONFIG) public config: FieldConfiguration
  ) {}
}
