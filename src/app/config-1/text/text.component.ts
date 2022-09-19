import { Component, Inject, Optional } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import {
  FieldConfiguration,
  DYNAMIC_CONTROL_CONFIG,
} from '../../dynamic-form/dynamic-form.types';

@Component({
  selector: 'config-1-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class Config1TextComponent {
  constructor(
    public control: FormControl,
    @Inject(DYNAMIC_CONTROL_CONFIG) public config: FieldConfiguration
  ) {}
}
