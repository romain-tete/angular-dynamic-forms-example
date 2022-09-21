import { Component, Optional } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'material-address',
  templateUrl: './material-address.component.html',
  styleUrls: ['./material-address.component.scss'],
})
export class MaterialAddressComponent {
  protected get group(): FormGroup<any> {
    if (this._group) {
      return this._group;
    }

    if (this.container) {
      return this.container.control as FormGroup<any>;
    }

    return new FormGroup({});
  }

  constructor(
    @Optional() private container: ControlContainer,
    @Optional() private _group: FormGroup | null = null
  ) {}
}
