import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapShowroomComponent } from './components/bootstrap-showroom.component';

const routes: Routes = [
  {
    path: '',
    component: BootstrapShowroomComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BootstrapFormsRoutingModule {}
