import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakeApiProductsService } from 'src/app/service/fake-api-products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy {

  constructor(private fakeApi : FakeApiProductsService){

  }
  ngOnDestroy(): void {
   this.myObserve?.unsubscribe();
  }

  myObserve : Subscription | undefined;
  ngOnInit(): void {
      this.myObserve =  this.fakeApi.testObserve().subscribe({
      next:(data)=>{console.log(data)},
      error:(data)=>{console.log(data)},
      complete:()=>{}
    });
  }
}
