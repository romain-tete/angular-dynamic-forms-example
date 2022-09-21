import {
  Directive,
  Injector,
  Input,
  OnInit,
  Provider,
  StaticProvider,
  ViewContainerRef,
} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormArray,
  FormControl,
  FormGroup,
  NgControl,
} from '@angular/forms';
import {
  FieldConfiguration,
  DYNAMIC_CONTROL_CONFIG,
  ControlsConfiguration,
} from './dynamic-form.types';

@Directive({
  selector: 'my-form-control',
})
export class MyFormControlDirective implements OnInit {
  @Input() rootForm!: FormGroup;
  @Input() controlConfiguration!: FieldConfiguration;
  @Input() mapping!: ControlsConfiguration;

  private get control(): AbstractControl | null {
    return this.rootForm.get(this.controlConfiguration.name);
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    const { type } = this.mapping ?? {};
    const providers: StaticProvider[] = [
      {
        provide: DYNAMIC_CONTROL_CONFIG,
        useValue: this.controlConfiguration,
      },
    ];

    switch (this.mapping.controlType) {
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

    this.viewContainerRef.createComponent<any>(type, { injector });
  }
}
