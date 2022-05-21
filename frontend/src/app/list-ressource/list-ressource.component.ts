import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import {UserRessourceComponent} from '../user-ressource/user-ressource.component'


@Component({
  selector: 'app-list-ressource',
  templateUrl: './list-ressource.component.html',
  styleUrls: ['./list-ressource.component.css']
})
export class ListRessourceComponent implements OnInit {
  loginData: any;
  listRessource : any;
  apprenant:any;
  formgroup:FormGroup;
  matiere : any;
  matieres :any;
  apprenants:any;
  submitted = false;
  listparApprenant :any
  constructor(private service :ServicesService,private router : Router,
    public  route: ActivatedRoute,public formBuilder: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
    
    this.loginData=JSON.parse(localStorage["isLogin"]);
    
    this.formgroup = this.formBuilder.group({
    
      pdf: [''],
      url: [''],
     
     
      

      //confirmPassword: ['', Validators.required],
      //acceptTerms: [false, Validators.requiredTrue] //Checkbox For accept conditions 
  },);
  this.AllRessourceByApprenant();
  this.RessourceParApprenant();
  }
  get f() { return this.formgroup.controls; }

  AllRessourceByApprenant(){
    this.service.RessourceParApprenant(this.loginData.id).subscribe((data)=>{
      
      this.listRessource = data
      console.log(this.listRessource)
    })
  }
  RessourceParApprenant(){
    this.service.RessourceParToApprenant(this.loginData.id).subscribe((data)=>{
      console.log(data)
      this.listparApprenant = data;
    })
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
  this.service.addRessourceApprenant(fg.value).subscribe((data)=>{
    if(data){
      console.log("ajout effectuer avec succès");
      
        this.router.navigateByUrl("/userRessource");
      
    }
  })
}
add(){
  this.dialog.open(UserRessourceComponent,{
    width: "90%",
  })
}

}
