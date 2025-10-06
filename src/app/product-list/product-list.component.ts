import { Component } from '@angular/core';
import { console } from 'node:inspector';

@Component({
  selector: 'product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  // name = "John Doe";
  addToCart: number = 0;
  product = {
    name: "iphone 14",
    price: 999,
    color: "Black",
    instock: 5,
    pImage: 'assets/images/iphone14.png'
  };

  get discountedPrice(): number {
    return this.product.price -201;
  }

  // onNameChange(event : any) {
  //   console.log(event.target.value);
  // }

  increaseQuantity(): void {
    if (this.addToCart < this.product.instock) {
      this.addToCart++;
    }
  }

  decreaseQuantity(): void {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }

}
