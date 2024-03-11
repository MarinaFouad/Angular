import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class FakeApiProductsService {
 baseURL : string ="http://localhost:3002/products";

  constructor(private http : HttpClient) { }

  getAll() : Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.baseURL);
  }

  getById(id:number) : Observable<Iproduct> {
    return this.http.get<Iproduct>(`${this.baseURL}/${id}`)
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  add(newProduct : Iproduct){
  return this.http.post(this.baseURL,newProduct)
   }

   Edit(id: number, prod: Iproduct) {
    return this.http.put(`${this.baseURL}/${id}`, prod);
  }

  testObserve():Observable<string>{
    console.log('called');
    let observe = new Observable<string>((observer)=>{

      observer.next('first');
      observer.next('second');
      if(false){
        observer.error('errorrr');
      }

      observer.complete();
      return {
        unsubscribe() {
          console.log('End subscription');
        },
      };
    });
    return observe;
  }
  
}
