import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { OrderService } from '../services/order/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  deliveryForm: FormGroup = new FormGroup({});
  cartTotal: number = 0;
  cartQuantity: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.deliveryForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
    this.cartTotal = this.cartService.getTotal();
    this.cartQuantity = this.cartService.getQuantity();
  }

  placeOrder() {
    const order = {
      id: 0, // this will be set by the server
      name: this.deliveryForm.value.name,
      address: this.deliveryForm.value.address,
      delivery: this.deliveryForm.value,
      books: this.cartService.getBooks(),
      total: this.cartTotal,
    };
    this.orderService.placeOrder(order).subscribe(() => {
      this.cartService.clearCart();
      this.router.navigate(['/orders']);
    });
    this.router.navigate(['/thank-you']);
  }
}
