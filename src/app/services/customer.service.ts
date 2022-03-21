 import { Injectable } from "@angular/core";
 import { HttpClient } from "@angular/common/http";
 @Injectable({
     providedIn:'root'
 })

 export class CustomerService{

    constructor(private http:HttpClient){ }
    getData()
    {
        //filterByCountry?countryId=1
         let url="http://localhost:8080/Customers";
         return this.http.get(url);
    }

    getfilter(id:any,valid:any)
    {
        if(valid!=null && id !=null)
        {
            let url="http://localhost:8080/Customers?countryId="+id+"&valid="+valid;
            return this.http.get(url);
        }
       else if(id==null)
        {
            let url="http://localhost:8080/Customers?valid="+valid;
            return this.http.get(url);
        }
        else
        {
         let url="http://localhost:8080/Customers?countryId="+id;
         return this.http.get(url);
        }
      
    }
 }