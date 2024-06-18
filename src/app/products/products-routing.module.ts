import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicsPageComponent } from './pipes/basics-page/basics-page.component';
import { NumbersPageComponent } from './pipes/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pipes/uncommon-page/uncommon-page.component';
import { OrderComponent } from './pipes/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsPageComponent
  },
  {
    path: 'numbers',
    component: NumbersPageComponent
  },
  {
    path: 'uncommon',
    component: UncommonPageComponent
  },
  {
    path: 'custom',
    component: OrderComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
