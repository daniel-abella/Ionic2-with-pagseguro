import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http} from "@angular/http";
import {Cart} from "../../providers/cart/cart";
import {MyCartPage} from "../my-cart/my-cart/";


/*
 Generated class for the ProductListPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/product-list/product-list.html',
})
export class ProductListPage implements OnInit {

  products:Array<any> = [];
  constructor(private nav:NavController, private http:Http, private cart:Cart) {}

  ngOnInit():any {
    this.http.get('http://localhost:8000/api/products')
      .toPromise().then(response => this.products = response.json())
  }

  addItem(item){
    this.cart.addItem(item);
    this.nav.setRoot(MyCartPage);
  }

}

