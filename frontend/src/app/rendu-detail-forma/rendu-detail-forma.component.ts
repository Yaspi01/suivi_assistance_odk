import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesService } from '../services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rendu-detail-forma',
  templateUrl: './rendu-detail-forma.component.html',
  styleUrls: ['./rendu-detail-forma.component.css']
})
export class RenduDetailFormaComponent implements OnInit {
  loginData: any;
  dataApprenant :any
  brief:any;
  formgroup:FormGroup;
  apprenant :any
  list : any
  submitted = false;
  id : any;
  dataRendu : any;
  dataEvaluation : any
  errorMessage : string
   constructor(private service : ServicesService,private router:Router,
    private route:ActivatedRoute,public formBuilder: FormBuilder, private toast : ToastrService) { }

  ngOnInit(): void {
    
    
   
    this.loginData=JSON.parse(localStorage["isLogin"]);
    
    this.id = this.route.snapshot.params['id'];
    this.service.BriefById(this.id).subscribe((data)=>{
      
     this.dataRendu =data;
     
     
     this.listRenduParBrief();
     this.service.EvaluationById(this.dataRendu.evaluation.id).subscribe((data)=>{
      this.dataEvaluation= data
      console.log(this.dataEvaluation.niveau)
    })
    });
    
    
}

get f() { return this.formgroup.controls; }

listRenduParBrief(){
 this.service.RenduParBrief(this.dataRendu.id).subscribe((data)=>{
   console.log(data)
   this.list = data;
 })
}


onUpdate(){
  this.service.UpdateEvaluation(this.dataRendu.evaluation.id,this.dataEvaluation).subscribe((data)=>{
   console.log((data));
   if(data){
     console.log("modifier")
     this.router.navigateByUrl("/rendu")
     this.presentToast()
   }
  },
  err => {
    this.errorMessage = err.error.message
    this.toast.error(err.error.message)
  }
  )
}
presentToast(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Le niveau de l\'apprenant modifier avec succès',
    showConfirmButton: false,
    timer: 3000
  })
}

}
