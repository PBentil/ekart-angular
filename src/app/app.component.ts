import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone : true,
})
export class AppComponent {
  title = 'Ecommerce-app';
}
  