import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  

  constructor(public http:HttpClient) { }

  listUsers() 
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/listusers"); 
  }

  insertMgr(mgr)
  {
    return this.http.post("http://localhost:8080/Day1.1/admin/addmanager",mgr);
  }
  addAddress(mgrid,addr)
  {
    return this.http.post("http://localhost:8080/Day1.1/admin/addaddressofmanager/" +mgrid, addr);
  }
  listEventDesc() {
    return this.http.get("http://localhost:8080/Day1.1/admin/listeventdesc");
  }
  insertEventDesc(mgrId,eventDesc)
  {
    return this.http.post("http://localhost:8080/Day1.1/admin/inserteventdesc/" +mgrId , eventDesc);
  }
  listFoodTypes() {
    return this.http.get("http://localhost:8080/Day1.1/admin/listfoodtype");
  }
  insertFoodType(eventid,food) 
  {
    return this.http.post("http://localhost:8080/Day1.1/admin/insertfood/" +eventid , food);
  }
  
  
}
