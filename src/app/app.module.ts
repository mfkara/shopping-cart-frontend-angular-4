import { RouterModule, Routes } from '@angular/router';
import { CartService } from './cart/cart.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {SimpleNotificationsModule, NotificationsService} from 'angular2-notifications';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { LoggedComponent } from './account/logged/logged.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VatAddedPipe } from './product/vat-added.pipe';
import { ProductFilterPipe } from './product/product-filter.pipe';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'products/:seoUrl',
    component: ProductComponent
  },
  {
    path: 'my-cart',
    component: CartComponent
  }
  ,
  {
    path: 'shipping-detail',
    component: ShippingDetailComponent
  },
  {path: '404', component: NotFoundComponent},

  {path: '*path', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    CartComponent,
    AccountComponent,
    ShippingDetailComponent,
    CartSummaryComponent,
    LoggedComponent,
    NotFoundComponent,
    VatAddedPipe,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    {provide: 'apiURL', useValue: 'http://localhost:8080/'},
    NotificationsService, CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
