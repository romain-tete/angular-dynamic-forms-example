import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'material',
    loadChildren: () =>
      import('./config-1/config-1.module').then((m) => m.Config1Module),
  },
  {
    path: 'bootstrap',
    loadChildren: () =>
      import('./config-2/config-2.module').then((m) => m.Config2Module),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'config-1',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
