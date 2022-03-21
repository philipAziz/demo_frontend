import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';

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
    options:any = [
      { id: 1, display: "Cameroon" },
      { id: 2, display: "Ethiopia" }, 
      { id: 3, display: "Morocco" }, 
      { id: 4, display: "Mozambique" }, 
      { id: 5, display: "Uganda" }, 
      { id:null, display: "all" }, 
      ];

      status:any = [
        { id: "true", display: "valid" },
        { id: "false", display: "invalid" },
         { id:null, display: "all" }, 
      
        ];

  constructor(private customer:CustomerService){
  
  }
  ngOnInit() {
   
    this.customer.getData().subscribe((data: any) =>{
      console.warn(data);
      
      this.data=data;
      
    })

   
   
  }

  
  form = new FormGroup({  
    status: new FormControl('', Validators.required)  ,
    country: new FormControl('', Validators.required)  
  });  
    
  get f(){  
    return this.form.controls;  
  }  
    
  submit(){ 
    console.log(this.form.value.status);  
    this.search (this.form.value.country,this.form.value.status);
  } 



  search (ngDropdown:any,valid:any){
    console.log(this.selected)
    this.customer.getfilter(ngDropdown, valid).subscribe((data: any) =>{
      console.warn(data);
      
      this.data=data;
      
    })


}




}

