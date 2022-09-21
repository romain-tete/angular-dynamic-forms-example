import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapDemoComponent } from './bootstrap-demo.component';

const routes: Routes = [
  {
    path: '',
    component: BootstrapDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BootstrapFormsRoutingModule {}
