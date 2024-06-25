import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit  {
  profilePicture:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeTSS-IfO-Yw-ZUQ2fVA2zMvtuq2pN3pf46A&s" 
  adminDetails:any={}
  profileStatus:any=false

  constructor(private admin:AdminService,private toastr:ToastrService){}

  ngOnInit(){
    this.admin.getAdmin().subscribe((res:any)=>{
      console.log(res)
      this.adminDetails=res
      if(res.profile){
        this.profilePicture=res.profile
      }
    })
  }

  onStatus(){
    this.profileStatus=!this.profileStatus
  }
  getFile(event:any){
    const file=event.target.files[0]
    let fr=new FileReader
    fr.readAsDataURL(file)
    fr.onload=(event:any)=>{
      console.log(event.target.result)
      this.profilePicture=event.target.result
      this.adminDetails.profile=event.target.result

    }
  }

  handleSubmit(){
    console.log(this.adminDetails)
    this.admin.updateAdmin(this.adminDetails).subscribe({
      next:(res:any)=>{
        this.toastr.success("admin details updated successfully")
        this.onStatus()
        this.ngOnInit
      },
      error:(error:any)=>{
        console.log(error)
        this.toastr.error("something went wrong")
      }
    })
  }

 }


