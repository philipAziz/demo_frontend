import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgModel } from '@angular/forms';

import{CustomerService} from './services/customer.service'

export class customers {
  name: string ="";
  phone: string="";
  id: number=0;
  state: string="";
  country:country=new country;
}
export class country {
  id: number=0;
  code: string="";
  name: string="";
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  


    title = 'Customers';
    data:any;
    selected = null;

    current:any = { id: 1, display: "Primary" } ;
    options = [
      { id: 1, display: "Primary" },
      { id: 2, display: "Something Else" }, 
      { id: 3, display: "Yet Another Option" }  ];
  Id = 1;
  

  constructor(private customer:CustomerService){
  
  }
  ngOnInit() {
   
    this.customer.getData().subscribe((data: any) =>{
      console.warn(data);
      
      this.data=data;
      
    })

   
   
  }

  search (ngDropdown:any,valid:any){
    console.log(this.selected)
    this.customer.getfilter(ngDropdown, valid).subscribe((data: any) =>{
      console.warn(data);
      
      this.data=data;
      
    })


}

onChange(event: any) {
  console.log(event); 
 }


}

