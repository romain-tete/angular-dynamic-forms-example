import { InjectionToken, Type } from '@angular/core';
import { AbstractControl } from '@angular/forms';

export interface FieldConfiguration {
  name: string;
  type: string;

  viewOptions: {
    label: string;
    placeholder?: string;
  } & { [key: string]: string | number };

  validators?: {
    length?: number;
    valueType?: 'numeric';
  };
}

export interface ControlConfiguration<
  T = any,
  K extends AbstractControl = AbstractControl
> {
  componentType: Type<any>;
  controlType: 'field' | 'group' | 'array';
  controlFactory: (value: T) => K;
}

export type ControlTypesMappings = Record<string, ControlConfiguration>;

export const DYNAMIC_FORM_CONFIG = new InjectionToken('DYNAMIC_FORM_CONFIG');
export const DYNAMIC_CONTROL_CONFIG = new InjectionToken<FieldConfiguration>(
  'DYNAMIC_CONTROL_CONFIG'
);
export const DYNAMIC_FORM_MAPPING = new InjectionToken<ControlTypesMappings>(
  'DYNAMIC_FORM_MAPPING'
);
