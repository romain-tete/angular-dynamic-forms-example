import {
  Directive,
  Injector,
  Input,
  OnInit,
  Provider,
  ViewContainerRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor(
    private viewContainerRef: ViewContainerRef,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    const { type } = this.mapping ?? {};

    const controlProvider: Provider = this.mapping?.is_container
      ? {
          provide: FormGroup,
          useValue: this.rootForm?.get(this.controlConfiguration?.name),
        }
      : {
          provide: FormControl,
          useValue: this.rootForm?.get(this.controlConfiguration?.name),
        };

    const injector = Injector.create({
      parent: this.injector,
      providers: [
        controlProvider,
        {
          provide: DYNAMIC_CONTROL_CONFIG,
          useValue: this.controlConfiguration,
        },
      ],
    });

    this.viewContainerRef.createComponent<any>(type, { injector });
  }
}
