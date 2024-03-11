import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Iproduct } from 'src/app/models/iproduct';
import { FakeApiProductsService } from 'src/app/service/fake-api-products.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit , OnDestroy{
  product: Iproduct | undefined;
  id: number = 0;

  constructor(
    private proService: FakeApiProductsService,
    private routing: ActivatedRoute,
    private navigates: Router
  ) {}

  proForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.minLength(5)
    ]),
    quantity: new FormControl('', [
      Validators.min(5)
    ]),
    category: new FormControl('', [Validators.minLength(4)]),
    discount: new FormControl('', [Validators.min(5), Validators.max(25)]),
    price: new FormControl('', [Validators.min(100)]),
    img: new FormControl(''),
    inSale: new FormControl(false)
  });
  ngOnDestroy(): void {
    this.myGetSub?.unsubscribe();
    this.myActionSub?.unsubscribe();
  }

  myGetSub: Subscription | undefined;
  myActionSub: Subscription | undefined;
  ngOnInit(): void {
    this.id = this.routing.snapshot.params['id'];
    // this.proService.getById(this.id).subscribe((data)=>{
    //   this.proForm.setValue({
    //     name: this.product?.name || '',
    //     price: this.product?.price || '',
    //     category: this.product?.description || '',
    //     quantity: this.product?.quantity || '',
    //     discount: this.product?.discount || '',
    //     inSale: this.product?.onSale || false
    //   });
    this.myGetSub =  this.proService.getById(this.id).subscribe((data) => {
      // this.myForm.controls['id'].setValue(data.id);
      this.proForm.controls['name'].setValue(data.name);
      this.proForm.controls['price'].setValue(data.price);
      this.proForm.controls['category'].setValue(data.description);
      this.proForm.controls['img'].setValue(data.img);
      this.proForm.controls['inSale'].setValue(data.onSale);
      this.proForm.controls['discount'].setValue(data.discount);
      this.proForm.controls['quantity'].setValue(data.quantity);

      //this.myForm.setValue(data);
    });
    
  }

  get nameControl() {
    return this.proForm.get('name');
  }

  get priceControl() {
    return this.proForm.get('price');
  }

  get discountControl() {
    return this.proForm.get('discount');
  }

  get quantityControl() {
    return this.proForm.get('quantity');
  }

  get categoryControl() {
    return this.proForm.get('category');
  }

  Edit(e:Event) {
    e.preventDefault();
    if (this.proForm.valid) {
      const formData = this.proForm.value;
      const updateProduct: Iproduct = {
        
        id: this.id,
        name: formData.name,
        img: this.product?.img || '',
        description: formData.category,
        price: formData.price,
        onSale: formData.inSale,
        discount: formData.discount,
        quantity: formData.quantity
      };
      this.myActionSub = this.proService.Edit( this.id , updateProduct).subscribe();      
      this.navigates.navigate(['/product']);
    }
  }
}
