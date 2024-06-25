import { Component } from '@angular/core';
import { Employee } from '../Schemas/employeeschema.component';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {
  emp:Employee={}
  constructor(private api:ApiService,private toastr:ToastrService,private router:Router){

  }
  handleSubmit(){
    console.log(this.emp)
    this.api.addEmployee(this.emp).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.toastr.success("Employee Added successfully!")
        this.emp={}
        this.router.navigateByUrl('employee')
       },
       error:(err:any)=>{
        console.log(err)
        this.toastr.error("Employee Adding Failed")
       },
    })
  }


}
