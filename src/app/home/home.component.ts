import { Component} from '@angular/core';
import { ApiService } from '../api.service';
import { Iitem } from '../iitem';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

 constructor(private _ApiService:ApiService){
 }


 show:boolean=true;


 productList!:Iitem[]
 ngOnInit(): void {
  this._ApiService.getdata().subscribe({
    next:(res)=>{
      this.productList=res;
      this.show=false;
    },
    error:(err)=>{
      console.log(err);
    }
  })
  
 }

 
 


}
