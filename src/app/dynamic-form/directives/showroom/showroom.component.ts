import { ChangeDetectionStrategy, Component } from '@angular/core';

// Bad practice, but simpler...
import { SharedConfiguration } from '../../shared-configuration.service';
import { FieldConfiguration } from '../../dynamic-form.types';

@Component({
  selector: 'showroom',
  template: `<my-form
    [config]="config"
    (valueChanges)="onValueChange($event)"
  ></my-form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowroomComponent {
  private _fields: FieldConfiguration[] | null = null;

  get config(): FieldConfiguration[] {
    if (!this._fields) {
      this._fields = this.shared.getConfiguration();
    }

    return this._fields;
  }

  constructor(private shared: SharedConfiguration) {}

  onValueChange(value: any): void {
    console.log(value);
  }
}
