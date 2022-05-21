import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-user-space',
  templateUrl: './user-space.component.html',
  styleUrls: ['./user-space.component.css']
})
export class UserSpaceComponent implements OnInit {
 loginData : any;
 list :any;
 img : any;
 listBrief :any;
 listRendu : any;
  constructor(private service : ServicesService) { }

  ngOnInit(): void {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    this.EvaluationParApprenant();
    this.BriefParId();
    this.RenduByBrief();
    this.img = this.service.Photo
  }
  EvaluationParApprenant(){
    this.service.ApprenantEvaluation(this.loginData.id).subscribe((data)=>{
     console.log(data)
     this.list = data;
    })
  }
  BriefParId(){
    this.service.ApprenantBrief(this.loginData.id).subscribe((data)=>{
      console.log(data);
      this.listBrief =data;
    })
  }
  RenduByBrief(){
    this.service.RenduByBriefId(this.loginData.id).subscribe((data)=>{
    this.listRendu = data;
    })
  }

}
