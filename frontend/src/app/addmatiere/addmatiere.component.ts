import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addmatiere',
  templateUrl: './addmatiere.component.html',
  styleUrls: ['./addmatiere.component.css']
})
export class AddmatiereComponent implements OnInit {
  
 
  public imgfile : any = File;
 
  submitted = false;
  loginData: any;

  apprenant:any;
  formulaire:FormGroup;
  matiere : any;
  matieres :any;
  apprenants:any;
  


  constructor(private service :ServicesService,private router : Router,
    public  route: ActivatedRoute,public formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    this.formulaire = this.formBuilder.group({
    
      nom_matiere: ['', Validators.required],
     
      

      //confirmPassword: ['', Validators.required],
      //acceptTerms: [false, Validators.requiredTrue] //Checkbox For accept conditions 
  },);
  }
  get f() { return this.formulaire.controls; }

  chargephoto(files: any){
    this.imgfile = files
    console.log(this.imgfile)
  }
  submitForm(){
    this.submitted = true;
    if(this.formulaire.value){

    this.service.addMatiere(this.formulaire.value, this.imgfile[0]).subscribe((res)=>{
      res.nom_matiere=this.formulaire.value.nom_matiere;
      this.service.UpdateMatiere(res.id, res).subscribe((data)=>{
       console.log(data)
       if(data){
         this.router.navigateByUrl('/listMatiere')
          this.presentToast();
        }
      })
        
    })
  }
}
presentToast(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Matiere enregistrer avec succès',
    showConfirmButton: false,
    timer: 3000
  })
}
}
