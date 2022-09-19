import {
  Component,
  Directive,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Subscription, tap } from 'rxjs';
import {
  ControlsConfiguration,
  FieldConfiguration,
  ControlTypesMappings,
  DYNAMIC_FORM_MAPPING,
} from './dynamic-form.types';

@Component({
  selector: 'my-form',
  template: `
    <my-form-control
      *ngFor="let control of config"
      [rootForm]="form"
      [controlConfiguration]="control"
      [mapping]="getMapping(control.type)"
    ></my-form-control>
  `,
  styles: [
    `
      :host {
        color: black;
        padding: 1rem;
      }
    `,
  ],
})
export class MyFormComponent<T = any> implements OnInit, OnDestroy {
  @Input() value: any;
  @Input() config: FieldConfiguration[] | null = null;
  @Output() valueChanges: EventEmitter<T> = new EventEmitter<T>();

  form!: FormGroup;
  private sub = new Subscription();

  constructor(
    @Inject(DYNAMIC_FORM_MAPPING) private _mapping: ControlTypesMappings
  ) {}

  ngOnInit(): void {
    this.form = this.createForm(null);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getMapping(type: string): ControlsConfiguration {
    return this._mapping[type];
  }

  protected createForm(value: any): FormGroup<any> {
    const group = new FormGroup<any>({});

    this.config?.map((c) => {
      const { type, options, name, label } = c;
      const typeConfig = this._mapping[type];

      if (!type) {
        throw new Error(
          'Unsupported control type. Was it configured and mapped to a component ?'
        );
      }

      const control = typeConfig.controlFactory(value?.[name] ?? null);
      const validators = this.getValidators(options);

      control.addValidators(validators);
      group.addControl(name, control);
    });

    const sub = group.valueChanges
      .pipe(tap(() => console.log(group)))
      .subscribe(this.valueChanges);
    this.sub.add(sub);

    return group;
  }

  protected getValidators(
    options: FieldConfiguration['options']
  ): ValidatorFn[] {
    const { length, valueType } = options ?? {};

    const validators: ValidatorFn[] = [];

    if (valueType && valueType === 'numeric') {
      validators.push((control: AbstractControl) => {
        if (typeof control.value !== 'string') {
          return null;
        }

        if (Number.isInteger(control.value) || control.value.length === 0) {
          return null;
        } else {
          return { value_type: true };
        }
      });
    }

    if (length) {
      validators.push(Validators.minLength(length));
      validators.push(Validators.maxLength(length));
    }

    return validators;
  }
}
