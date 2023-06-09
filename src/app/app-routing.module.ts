import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { OrderComponent } from './components/order/order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ItemComponent } from './components/item/item.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { signedInGuard } from './guards/signed-in.guard';
import { signedOutGuard } from './guards/signed-out.guard';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent, data: { title: 'Menu' }},
  { path: 'item/:id', component: ItemComponent, data: { title: 'Product' }},
  { path: 'create/order', component: CreateOrderComponent, data: { title: 'Crear Comanda' }, canActivate: [signedInGuard]},
  { path: 'order', component: OrdersComponent, data: { title: 'Comandas' }, canActivate: [signedInGuard]},
  { path: 'order/:id', component: OrderComponent, data: { title: 'Comandas' }, canActivate: [signedInGuard]},
  { path: 'signin', component:SignInComponent, data: { title: 'Iniciar Sesión' }, canActivate: [signedOutGuard]},
  { path: 'signup', component:SignUpComponent, data: { title: 'Registrarse' }, canActivate: [signedInGuard]},
  { path: '**', redirectTo: '/menu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
