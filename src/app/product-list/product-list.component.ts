import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  name:string = "John Doe";
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

}
