import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_url:string="http://localhost:3000"
   constructor(private http:HttpClient) { }

   addEmployee(data:any){
    return this.http.post(`${this.base_url}/employees`,data)
   }
   getAllEmployee(){
    return this.http.get(`${this.base_url}/employees`)
   }

   deleteEmployee(id:any){
    return this.http.delete(`${this.base_url}/employees/${id}`)
   }
   getSpecificEmployee(id:any){
    return this.http.get(`${this.base_url}/employees/${id}`)
   }
   updateEmployee(id:any,data:any){
    return this.http.put(`${this.base_url}/employees/${id}`,data) 
   }
}
