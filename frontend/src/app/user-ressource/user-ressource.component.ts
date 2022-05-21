import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-ressource',
  templateUrl: './user-ressource.component.html',
  styleUrls: ['./user-ressource.component.css']
})
export class UserRessourceComponent implements OnInit {
  loginData: any;
  listRessource : any;
  apprenant:any;
  formgroup:FormGroup;
  public imgfile : any = File;
  matiere : any;
  matieres :any;
  apprenants:any;
  submitted = false;
  data : any
  constructor(private service :ServicesService,private router : Router,
    public  route: ActivatedRoute,public formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    
    this.loginData=JSON.parse(localStorage["isLogin"]);
    
    this.formgroup = this.formBuilder.group({
    
      // pdf: [''],
      url: [''],
     
     
      

      //confirmPassword: ['', Validators.required],
      //acceptTerms: [false, Validators.requiredTrue] //Checkbox For accept conditions 
  },);
  this.AllRessourceByApprenant();
  }
  get f() { return this.formgroup.controls; }

  AllRessourceByApprenant(){
    this.service.RessourceParApprenant(this.loginData.id).subscribe((data)=>{
      
      this.listRessource = data
      console.log(this.listRessource)
    })
  }
  chargephoto(files: any){
    this.imgfile = files
    console.log(this.imgfile)
  }

ajouterRessource(fg : FormGroup){
  this.submitted = true;
  


  // stop here if form is invalid
  if (this.formgroup.invalid) {
      return;
  }

 

  var obj1: { [id: string]: any} = {};
  obj1['id'] = this.loginData.id; 
  fg.value.apprenant = obj1;
  // this.service.addRessourceApprenant(fg.value).subscribe((data)=>{
  //   if(data){
  //     // console.log("ajout effectuer avec succès");
      
  //       this.router.navigateByUrl("/listRessource");
  //       this.presentToast();
      
  //   }else{
      this.service.addPDF(fg.value, this.imgfile[0]).subscribe((data)=>{
      data.apprenant=fg.value.apprenant
      console.log(data.apprenant)
      this.service.UpdateRessource(data.id, data).subscribe((res)=>{
        console.log(res)
        if(res){
          this.router.navigateByUrl("/listRessource");
          this.presentToast();
        }
      })
    
  })
}

presentToast(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Ressource ajouter avec succès',
    showConfirmButton: false,
    timer: 3000
  })
}
}
