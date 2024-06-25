import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: String=""
  password: String=""
  constructor(private toastr:ToastrService,private admin:AdminService,private router:Router){}

  handleLogin=()=>{
    console.log(this.email,this.password)
    if(this.email && this.password){
      const result=this.admin.getAdmin()
      result.subscribe({
        next:(res:any)=>{
          console.log(res)
          if(this.email == res.email && this.password == this.password ){
            this.toastr.success("Login Successfully")
            this.email=""
            this.password=""
            sessionStorage.setItem('admin',JSON.stringify(res))
            this.router.navigateByUrl('home')
          }
          else{
            this.toastr.error("Invalid Username /Password")
          }
        },
        error:(err)=>{
          console.log(err)
          this.toastr.warning(err)
        }
      })
     
    }
    else{
      this.toastr.error("Login Failed /Invalid username or password ")
    }
  }
  

}
