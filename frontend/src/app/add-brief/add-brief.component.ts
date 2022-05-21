import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-brief',
  templateUrl: './add-brief.component.html',
  styleUrls: ['./add-brief.component.css']
})
export class AddBriefComponent implements OnInit {
  loginData: any;
  formateur :any
  login:any;
  apprenant:any;
  formgroup:FormGroup;
  public imgfile : any = File;
  evaluation : any
  Type: any;
  apprenants:any;
  submitted = false;
  listEvaluation : any;
  listApprenant :any
  evaluations : any;
  id : any
  constructor(private service : ServicesService, 
    private router : Router,
    public  route: ActivatedRoute,public toast: ToastrService,public formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    this.id = this.route.snapshot.params['id'];
    this.service.ApprenantById(this.id).subscribe((data)=>{
     this.listApprenant= data
     console.log(this.listApprenant.nom)
    })
    this.apprenants= this.listeApprenant();
    this.evaluations = this.AllEvaluationByApprenant();

    this.formgroup = this.formBuilder.group({

      type: ['', Validators.required],
      description: ['', Validators.required],
      formateur: ['', Validators.required],
      dateRendu: ['', Validators.required],
      apprenant:['',Validators.required],
      evaluation:['',Validators.required],
      

      //confirmPassword: ['', Validators.required],
      //acceptTerms: [false, Validators.requiredTrue] //Checkbox For accept conditions 
  },);
  }



  listeApprenant(){
    this.service.getAllApprenant().subscribe((data)=>{
      
      this.apprenants=data;
      
    })
  }
  AllEvaluationByApprenant(){
    this.service.ApprenantEvaluation(this.id).subscribe((data)=>{
      console.log(data)
      this.evaluations = data;
    })
  }

  get f() { return this.formgroup.controls; }

  chargephoto(files: any){
    this.imgfile = files
    console.log(this.imgfile)
  }

  ajouterBrief(fg : FormGroup){
    this.submitted = true;
    


    // stop here if form is invalid
    if (fg.value) {
        
   

    // var obj: { [id: string]: any} = {};
    // obj['id'] = fg.value.apprenant; 
    // fg.value.apprenant = obj;
   fg.value.apprenant = this.listApprenant

    var obj2: { [id: string]: any} = {};
    obj2['id'] = fg.value.evaluation; 
    fg.value.evaluation = obj2;

    var obj1: { [id: string]: any} = {};
    obj1['id'] = this.loginData.id; 
    fg.value.formateur = obj1;

    if(new Date() >= new Date(fg.controls['dateRendu'].value)){
      console.log("date non Valide");
      this.toast.error("La Date de rendu ne doit être inferieur ou égale à la date du jour !!!")
      return;
  }
    

    
    this.service.addBrief(fg.value, this.imgfile[0]).subscribe((data)=>{
      
     
      data.type=fg.value['type']
      data.description=fg.value['description']
      data.apprenant=fg.value['apprenant']
      // console.log(data.apprenant)
      data.formateur=fg.value['formateur']
      console.log(data.apprenant.assister)
      data.dateRendu=fg.value['dateRendu']

      data.evaluation=fg.value['evaluation']
      console.log(data)

     
      this.service.UpdateBrief(data.id, data).subscribe((res)=>{
        
        if(res){
          this.service.UpdateAssiter(this.id,this.listApprenant).subscribe((dataAssister)=>{
           if(dataAssister){
            this.router.navigateByUrl('/brief')
            this.presentToast();
          }
          })
          
          }
       })
    })

  } }

  presentToast(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Brief enregistrer avec succès',
      showConfirmButton: false,
      timer: 3000
    })
  }

}
