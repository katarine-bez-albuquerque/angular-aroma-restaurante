import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { AboutComponent } from '../../components/about/about.component';
import { ProductsComponent } from '../../components/products/products.component';
import { LocalComponent } from '../../components/local/local.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    ProductsComponent,
    LocalComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
