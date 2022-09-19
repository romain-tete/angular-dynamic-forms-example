import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Config1IndexComponent } from './index.component';

const routes: Routes = [
  {
    path: '',
    component: Config1IndexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Config1RoutingModule {}
