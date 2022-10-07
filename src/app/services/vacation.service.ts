 import { Injectable } from "@angular/core";
 import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";

 @Injectable({
     providedIn:'root'
 })

 export class CustomerService{

    constructor(private http:HttpClient){ }
    getData()
    {
        //filterByCountry?countryId=1
        
         let url="localhost:8080/employee";
         return this.http.get(url);
    }

    addVacation(vacation:any)
    {
        console.log(vacation)
         let url="http://localhost:8080/vacation";
         return this.http.post(url,vacation);
    }


 }