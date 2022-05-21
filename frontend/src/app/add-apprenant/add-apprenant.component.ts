import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-apprenant',
  templateUrl: './add-apprenant.component.html',
  styleUrls: ['./add-apprenant.component.css']
})
export class AddApprenantComponent implements OnInit {
  formgroup :any;
  submitted = false;
  errorMessage: string;
  emailPatern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  constructor( public  route: ActivatedRoute,
    public router : Router,private service : ServicesService,
    public toast: ToastrService,public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formgroup = this.formBuilder.group({

      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      login: ['', Validators.required],
      telephone: ['', [Validators.required,Validators.min(8)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPatern)]],
      motDePass: ['', [Validators.required, Validators.minLength(6)]],
      

      //confirmPassword: ['', Validators.required],
      //acceptTerms: [false, Validators.requiredTrue] //Checkbox For accept conditions 
  },);
  }
  get f() { return this.formgroup.controls; }




  ajouter_apprenant(fg : FormGroup){
    this.submitted = true;
  
  this.service.addApprenant(fg.value).subscribe((data)=>{
 console.log(data);
  if(data){
    this.router.navigateByUrl("/accueil");
    this.presentToast();
  }else{
    this.toast.error();
  }
  }, err => {
    this.errorMessage = err.error.message
    this.toast.error(err.error.message)
  }
  )
 
  }
  presentToast(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Apprenant enregistrer avec succès',
      showConfirmButton: false,
      timer: 3000
    })
  }
  
}
