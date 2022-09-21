import {
  Directive,
  Injector,
  Input,
  OnInit,
  StaticProvider,
  ViewContainerRef,
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';
import {
  FieldConfiguration,
  DYNAMIC_CONTROL_CONFIG,
  ControlConfiguration,
} from '../dynamic-form.types';

@Directive({
  selector: '[myFormControl]',
})
export class MyFormControlDirective implements OnInit {
  @Input() rootForm!: FormGroup;
  @Input() fieldConfiguration!: FieldConfiguration;
  @Input() controlConfiguration!: ControlConfiguration;

  private get control(): AbstractControl | null {
    return this.rootForm.get(this.fieldConfiguration.name);
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    const { componentType } = this.controlConfiguration ?? {};
    const providers: StaticProvider[] = [
      {
        provide: DYNAMIC_CONTROL_CONFIG,
        useValue: this.fieldConfiguration,
      },
    ];

    switch (this.controlConfiguration.controlType) {
      case 'field':
        providers.push({
          provide: FormControl,
          useValue: this.control,
        });
        break;
      case 'array':
        providers.push({
          provide: FormArray,
          useValue: this.control,
        });
        break;
      case 'group':
        providers.push({
          provide: FormGroup,
          useValue: this.control,
        });
        break;
    }

    const injector = Injector.create({
      parent: this.injector,
      providers,
    });

    this.viewContainerRef.createComponent<any>(componentType, { injector });
  }
}
