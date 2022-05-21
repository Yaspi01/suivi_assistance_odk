import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-evaluation',
  templateUrl: './add-evaluation.component.html',
  styleUrls: ['./add-evaluation.component.css']
})
export class AddEvaluationComponent implements OnInit {
  loginData: any;

  apprenant:any;
  formgroup:FormGroup;
  matiere : any;
  matieres :any;
  apprenants:any;
  submitted = false;


  photo: File | any;
  message: any;
  imagePath: any;
  imgURL: any;
  constructor(private service :ServicesService,private router : Router,
    public  route: ActivatedRoute,public formBuilder: FormBuilder
    
    
    ) { }

  ngOnInit(): void {
    this.apprenants= this.listeApprenant();
    this.matieres =this.listeMatiere();
    this.formgroup = this.formBuilder.group({
    
      niveau: ['', Validators.required],
      matiere: [''],
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
  listeMatiere(){
    this.service.getAllMatiere().subscribe((data)=>{
      console.log(data)
      this.matieres = data
    })
  }
  get f() { return this.formgroup.controls; }

  ajouterEvaluation(fg : FormGroup){
    this.submitted = true;
    


    // stop here if form is invalid
    if (this.formgroup.invalid) {
        return;
    }

    var obj: { [id: string]: any} = {};
    obj['id'] = fg.value.apprenant; 
    fg.value.apprenant = obj;

    var obj1: { [id: string]: any} = {};
    obj1['id'] = fg.value.matiere;
    fg.value.matiere = obj1;

    

    console.log(JSON.stringify(fg.value));
    this.service.addevaluation (fg.value).subscribe((data)=>{
      if(data){
        console.log("ajout effectuer avec succès");
        
          this.router.navigateByUrl("/evaluation");
          this.presentToast();
        
      }
    })

  }

  presentToast(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Evaluation enregistrer avec succès',
      showConfirmButton: false,
      timer: 3000
    })
  }
}
