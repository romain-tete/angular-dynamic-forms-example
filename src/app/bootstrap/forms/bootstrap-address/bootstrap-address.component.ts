import { Component, Optional } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'bootstrap-address',
  templateUrl: './bootstrap-address.component.html',
  styleUrls: ['./bootstrap-address.component.scss'],
})
export class BootstrapAddressComponent {
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
