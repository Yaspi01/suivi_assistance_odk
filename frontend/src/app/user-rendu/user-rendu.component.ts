import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-user-rendu',
  templateUrl: './user-rendu.component.html',
  styleUrls: ['./user-rendu.component.css']
})
export class UserRenduComponent implements OnInit {
  listBrief : any;
  loginData :any;
  img  :any
  constructor(private service : ServicesService, private router : Router) { }

  ngOnInit(): void {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    this.BriefParId();
    this.img=this.service.PhotoBrief
  }

  BriefParId(){
    this.service.ApprenantBrief(this.loginData.id).subscribe((data)=>{
      console.log(data);
      this.listBrief =data;
    })
  }


}
