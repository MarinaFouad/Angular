import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/service/product.service';
import { FakeApiProductsService } from 'src/app/service/fake-api-products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit , OnDestroy{
productList : Iproduct[]=[] ;
    constructor(private productServices: FakeApiProductsService){

    }
    mySubsc : Subscription | undefined;
  ngOnDestroy(): void {
   this.mySubsc?.unsubscribe();
  }
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.mySubsc = this.productServices.getAll().subscribe({
      next: (data) => {
        this.productList = data;
      },
    });
  }

  delete(id: number) {
    // call service `delete` method to remove the product with passed parameter `id`
    this.productServices.delete(id).subscribe(() => {
      this.getData();
    });
  }

  // delete(id:number){
  //   this.productServices.deleteProduct(id);
  //   this.productList = this.productServices.getAll() as Iproduct[];
  // }
}
