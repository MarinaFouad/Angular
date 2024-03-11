import { ProductService } from 'src/app/service/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { ActivatedRoute } from '@angular/router';
import { FakeApiProductsService } from 'src/app/service/fake-api-products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit , OnDestroy {
productdetails :Iproduct | undefined;

constructor(private prosrvice :FakeApiProductsService , private activeRoute : ActivatedRoute){}
 id:number=0;
 mySubsc : Subscription | undefined;
 ngOnDestroy(): void {
  this.mySubsc?.unsubscribe();
 }
ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
   this.mySubsc= this.prosrvice.getById(this.id).subscribe((data)=>{
    this.productdetails=data;
    })
  }


}
