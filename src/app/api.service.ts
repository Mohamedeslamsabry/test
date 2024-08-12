import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private _HttpClient_:HttpClient) { }





  getdata():Observable<any>
  {
   return  this._HttpClient_.get('https://fakestoreapi.com/products');
  }


 


}
