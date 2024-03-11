import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductComponent } from './components/core/product/product.component';
import { ProductDetailsComponent } from './components/core/product-details/product-details.component';
import { ProductFormComponent } from './components/core/product-form/product-form.component';
import { LoginComponent } from './components/core/login/login.component';
import { NotfoundComponent } from './components/core/notfound/notfound.component';
import { HomeComponent } from './components/core/home/home.component';
import { ProductEditComponent } from './components/core/product-edit/product-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    LoginComponent,
    NotfoundComponent,
    HomeComponent,
    ProductEditComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
