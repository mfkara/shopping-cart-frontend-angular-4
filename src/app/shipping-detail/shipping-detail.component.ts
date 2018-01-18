import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications/dist';
import { CartService } from './../cart/cart.service';
import { NgForm } from '@angular/forms/src/directives';
import { ShippingDetail } from './shipping-detail';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping-detail',
  templateUrl: './shipping-detail.component.html',
  styleUrls: ['./shipping-detail.component.css']
})
export class ShippingDetailComponent implements OnInit {

  constructor(private cartService: CartService, private notificationsService: NotificationsService, private router: Router) { }
  cities = [];
  model: ShippingDetail = new ShippingDetail('', '', true, -1);
  ngOnInit() {
    this.cities.push(
      {'id': '1', 'name': 'Ankara'},
      {'id': '2', 'name': 'İstanbul'},
      {'id': '3', 'name': 'London'},

    );
  }

  checkout(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.cartService.clear();
    this.notificationsService.info('Successfull', 'Shopping Completed');
    this.router.navigate(['products']);
  }

}
