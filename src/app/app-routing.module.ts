import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';
import { LoginComponent } from './components/core/login/login.component';
import { ProductComponent } from './components/core/product/product.component';
import { ProductDetailsComponent } from './components/core/product-details/product-details.component';
import { ProductEditComponent } from './components/core/product-edit/product-edit.component';
import { ProductFormComponent } from './components/core/product-form/product-form.component';
import { NotfoundComponent } from './components/core/notfound/notfound.component';
import { gurdsGuard } from './service/gurds.guard';

const routes: Routes = [
  {path:"",redirectTo:"home" , pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"product",component:ProductComponent},
  {path:"product/details/:id",component:ProductDetailsComponent , canActivate: [gurdsGuard]},
  {path:"product/edit/:id",component:ProductEditComponent , canActivate: [gurdsGuard]},
  {path:"product/form",component:ProductFormComponent , canActivate: [gurdsGuard]},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
