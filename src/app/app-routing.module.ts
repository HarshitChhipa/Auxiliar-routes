import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OutletComponentComponent} from './outlet-component/outlet-component.component';

const routes: Routes = [
  {
    path: '',
    component: OutletComponentComponent,
    outlet: 'outlibeti'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
