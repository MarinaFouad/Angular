import { Iproduct } from 'src/app/models/iproduct';
import { ProductFormComponent } from './../components/core/product-form/product-form.component';
import { ProductList } from './../models/product-list';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Iproduct[] | undefined;

  constructor() { 
    this.products=ProductList;
    
  }
  
  getAll() :Iproduct[] |undefined {
    return this.products;
  }

  getById(id:number): Iproduct|undefined{
    return this.products?.find(i=>i.id==id);
  }

  add(pro:Iproduct)  {

   let count  = this.products?.length ;
   var product = { ...pro };
   product.id= count || 1; 
   product.id = pro.id+1;
     this.products?.push(product);
  }

  deleteProduct(id:number) {
   this.products=this.products?.filter(d=> d.id!=id);
  }

  edit( updatedProduct: Iproduct | undefined): void {
   
    if (updatedProduct && this.products) {
      const index = this.products.findIndex(product => product.id == updatedProduct.id);
      if (index != -1) {
          this.products[index].name = updatedProduct.name || this.products[index].name;
          this.products[index].description = updatedProduct.description;
              this.products[index].discount = updatedProduct.discount;
              this.products[index].img = updatedProduct.img;
              this.products[index].onSale = updatedProduct.onSale;
              this.products[index].quantity = updatedProduct.quantity;    
      }
  }
  
  }
  

}
