import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'material',
    loadChildren: () =>
      import('./material/material-forms.module').then(
        (m) => m.MaterialFormsModule
      ),
  },
  {
    path: 'bootstrap',
    loadChildren: () =>
      import('./bootstrap/bootstrap-forms.module').then(
        (m) => m.BootstrapFormsModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'material',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
