import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { ItemComponent } from './components/item/item.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderComponent } from './components/order/order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignOutModalComponent } from './components/sign-out-modal/sign-out-modal.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TokenInvalidModalComponent } from './components/token-invalid-modal/token-invalid-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CreateOrderComponent,
    ItemComponent,
    MenuComponent,
    OrderComponent,
    OrdersComponent,
    SignInComponent,
    SignOutModalComponent,
    SignUpComponent,
    TokenInvalidModalComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
