import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { FakeApiProductsService } from 'src/app/service/fake-api-products.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
productList : Iproduct[]=[] ;
    constructor(private productStaticServices:FakeApiProductsService ){

    }
  ngOnInit(): void {
    this.productStaticServices.getAll().subscribe({
      next:(data)=>{this.productList=data}
    });


  }


  // delete(id:number){
  //   this.productStaticServices.deleteProduct(id);
  //   this.productList = this.productStaticServices.getAll() as Iproduct[];
  // }
}
