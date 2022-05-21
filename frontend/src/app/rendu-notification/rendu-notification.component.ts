import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-rendu-notification',
  templateUrl: './rendu-notification.component.html',
  styleUrls: ['./rendu-notification.component.css']
})
export class RenduNotificationComponent implements OnInit {
  img : any;
  listBrief : any;
  loginData: any;
  dataApprenant :any
  brief:any;
  apprenant :any
  list : any
  submitted = false;
  id : any;
  dataRendu : any;
  dataEvaluation : any
   constructor(private service : ServicesService,private router:Router,private route:ActivatedRoute,public formBuilder: FormBuilder,) { }
 
   ngOnInit(): void {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    
    this.id = this.route.snapshot.params['id'];
    this.service.BriefById(this.id).subscribe((data)=>{
      
     this.dataRendu =data;
     
    });
    
   }
   Brief(){
     this.service.getAllBrief().subscribe((data)=>{
       console.log(data);
       this.listBrief =data;
     })
   }

   vu(){
     this.service.UpdateVu(this.id,this.dataRendu).subscribe((data)=>{
       if(data){
         console.log("vu")
      
         location.replace("rendu")
       }
     })
   }

}
