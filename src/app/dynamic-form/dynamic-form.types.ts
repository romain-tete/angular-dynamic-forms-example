import { InjectionToken, Type } from '@angular/core';
import { AbstractControl, Validator, ValidatorFn } from '@angular/forms';

export interface FieldConfiguration {
  label: string;
  name: string;
  type: string;
  options?: {
    length?: number;
    valueType?: 'numeric';
    placeholder?: string;
  };
}

export interface ControlsConfiguration<
  T = any,
  K extends AbstractControl = AbstractControl
> {
  type: Type<any>;
  is_container: boolean;
  controlFactory: (value: T) => K;
}

export type ControlTypesMappings = Record<string, ControlsConfiguration>;

export const DYNAMIC_FORM_CONFIG = new InjectionToken('DYNAMIC_FORM_CONFIG');
export const DYNAMIC_CONTROL_CONFIG = new InjectionToken<FieldConfiguration>(
  'DYNAMIC_CONTROL_CONFIG'
);
export const DYNAMIC_FORM_MAPPING = new InjectionToken<ControlTypesMappings>(
  'DYNAMIC_FORM_MAPPING'
);
