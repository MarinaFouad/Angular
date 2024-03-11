import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Iproduct } from 'src/app/models/iproduct';
import { FakeApiProductsService } from 'src/app/service/fake-api-products.service';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit , OnDestroy{

  product : Iproduct | undefined;

  sub : Subscription | undefined;
  
  constructor(private proService : FakeApiProductsService , private route : Router){}
 
 
    ngOnDestroy(): void {
      this.myGetSub?.unsubscribe();
      this.myActionSub?.unsubscribe();
    }
    id: number = 0;
  
    myGetSub: Subscription | undefined;
    myActionSub: Subscription | undefined;

  ngOnInit(): void {
  }
  
  proForm: FormGroup= new FormGroup({
    name: new FormControl('',[
      Validators.minLength(5)    
    ]),
    quantity: new FormControl('',[
      Validators.min(5)
    ]),
    category: new FormControl('', [Validators.minLength(4)]),
    discount: new FormControl('',[Validators.min(5) , Validators.max(25)]),
    price: new FormControl('',[Validators.min(100)]),
    inSale: new FormControl(false)
  });
  
  get nameControl(){
    return this.proForm.get('name') ;
  }
  
  get priceControl(){
    return this.proForm.get('price');
  }
  
  get discountControl(){
    return this.proForm.get('discount');
  }
  get quantityControl(){
    return this.proForm.get('quantity');
  }
  get categoryControl(){
    return this.proForm.get('category');
  }
  
  //@Output() myEvent: EventEmitter<Iproduct> = new EventEmitter<Iproduct>();
  
    // AddProduct(e:Event) {
    //   e.preventDefault();
    //   if (this.proForm.valid) {
    //     this.proForm.patchValue({ 
    //       inSale: this.proForm.get('inSale')?.value === true
    //     });
    //     this.myEvent.emit(this.proForm.value);
    //     this.proForm.reset();
    //   }
    // } 

    AddProduct(e:Event) {
      e.preventDefault();
      if (this.proForm.valid) {
        this.proForm.patchValue({ 
          inSale: this.proForm.get('inSale')?.value === true
        });
       this.sub= this.proService.add(this.proForm.value).subscribe();
        this.route.navigate(['/product']);
      }
    }
  
}
