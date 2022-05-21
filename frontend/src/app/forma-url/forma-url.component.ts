import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-forma-url',
  templateUrl: './forma-url.component.html',
  styleUrls: ['./forma-url.component.css']
})
export class FormaUrlComponent implements OnInit {
  loginData: any;
  formateur :any
  login:any;
  apprenant:any;
  formgroup:FormGroup;
  Type: any;
  apprenants:any;
  submitted = false;
  public imgfile : any = File;
  constructor(private service : ServicesService, 
    private router : Router,
    public  route: ActivatedRoute,public formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    this.apprenants= this.listeApprenant();
    this.formgroup = this.formBuilder.group({

      lien: [''],
      pdf: [''],
      apprenant:[''],
     
      

      //confirmPassword: ['', Validators.required],
      //acceptTerms: [false, Validators.requiredTrue] //Checkbox For accept conditions 
  },);
  }

  listeApprenant(){
    this.service.getAllApprenant().subscribe((data)=>{
      
      this.apprenants=data;
      console.log(this.apprenant)
    })
  }
  chargephoto(files: any){
    this.imgfile = files
    console.log(this.imgfile)
  }
  get f() { return this.formgroup.controls; }

  ajouterRessource(fg : FormGroup){
    this.submitted = true;
    


    // stop here if form is invalid
    if (this.formgroup.invalid) {
        return;
    }

    var obj: { [id: string]: any} = {};
    obj['id'] = fg.value.apprenant; 
    fg.value.apprenant = obj;

    var obj1: { [id: string]: any} = {};
    obj1['id'] = this.loginData.id; 
    fg.value.formateur = obj1;

    

    console.log(JSON.stringify(fg.value));
    this.service.addPDFFormateur(fg.value,this.imgfile[0]).subscribe((data)=>{

      data.apprenant=fg.value.apprenant
      data.formateur=fg.value.formateur
      this.service.UpdateRessourceFormateur(data.id, data).subscribe((res)=>{
        if(res){
        console.log("ajout effectuer avec succès");
        
          this.router.navigateByUrl("/listFormaRessource");
          this.presentToast();
        
      }
      })
      // if(data){
      //   console.log("ajout effectuer avec succès");
        
      //     this.router.navigateByUrl("/listFormaRessource");
      //     this.presentToast();
        
      // }
    })

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
