import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
cdate=new Date()
employees:any=[]
searchkey:any=""
constructor(private api:ApiService ,private toastr:ToastrService){}
  //console.log("emplist")

ngOnInit() {
  console.log("hello")
  this.api.getAllEmployee().subscribe({
    next:(res:any)=>{
      //console.log(res)
      this.getData(res)
    },
    error:(error:any)=>{
      console.log(error)
    }
  })
  
}
getData(data:any){
  this.employees=data
  console.log(this.employees)
}

deleteEmp(id:any){
  this.api.deleteEmployee(id).subscribe({
    next:(res:any)=>{
      this.toastr.success("Employee Deleted sucessfully!")
      this.ngOnInit()
    },
    error:(err:any)=>{
      console.log(err)
      this.toastr.error("Deletion failed!")
    }
  })
}
sortId(){
  this.employees.sort((a:any,b:any)=>a.id-b.id)
}

sortUsername(){
  this.employees.sort((a:any,b:any)=>a.username.localeCompare(b.username))
}

exportTopdf(){
 
const body=this.employees.map((item:any)=>Object.values(item))
console.log(body)
 const doc=new jsPDF()
 autoTable(doc,{
  head:[['ID','Username','Email','Status']],
  body:body
 })
 doc.save('employee-table.pdf')
}

}

