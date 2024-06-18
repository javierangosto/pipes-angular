import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsPageComponent } from './pipes/basics-page/basics-page.component';
import { NumbersPageComponent } from './pipes/numbers-page/numbers-page.component';
import { OrderComponent } from './pipes/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { UncommonPageComponent } from './pipes/uncommon-page/uncommon-page.component';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { ColorPipe } from './pipes/color.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    CanFlyPipe,
    ColorPipe,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,
    ToggleCasePipe,
    SortByPipe,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
