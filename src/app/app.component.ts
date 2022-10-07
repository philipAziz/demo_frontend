import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';

import{CustomerService} from './services/vacation.service'
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

export class country {
  id: number=0;
  code: string="";
  name: string="";
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'HR System';
    data:any;
    days : string = '8'
    types:any = [
      { id: 1, display: "annual" },
      { id: 2, display: "sick" }
      ];
selectedType = this.types[0];
currentDate = new Date();
form = new FormGroup({
  type : new FormControl(''),
  startDate : new FormControl(''),
  endDate : new FormControl(''),
  days : new FormControl(''),
})
tableData :any = {
  annual : '6',
  sick : '4'
};
  constructor(private customer:CustomerService){
 
  }
  
  ngOnInit() {
 
  }

submit(){
  console.log( this.form.value);

  this.customer.addVacation(this.form.value).subscribe((data: any) =>{
    
    this.form.controls['days'].setValue(data['vacation']['amount']);
    this.tableData.annual=data['employee']['annualBalance'];
    this.tableData.sick=data['employee']['sickBalance'];
    this.data=data;
    console.log(this.data,">>>>>>data")
    
  })
}
convertdate(str: string) {
  var date = new Date(str),
    mnth = ('0' + (date.getMonth() + 1)).slice(-2),
    day = ('0' + date.getDate()).slice(-2);
  return [day, mnth, date.getFullYear()].join('/');
}
}

