import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loginData:any;
  loginStatus:boolean = false;
  formateur : boolean = false;
  apprenant : boolean = false;
  userRole:any;
  status : any ="Fait";
  vu: any = 0;
  list : any
  constructor( private service : ServicesService) { }

  ngOnInit(): void {
    if(localStorage["isLogin"]){
      this.loginData=JSON.parse(localStorage["isLogin"]);
    }
    if(localStorage["userRole"]){
      this.userRole=JSON.parse(localStorage["userRole"]);
    }
    console.log(this.userRole)
    
    if(localStorage["loginStatus"]){
      this.loginStatus=JSON.parse(localStorage["loginStatus"]);
    }
    if(localStorage["formateur"]){
      this.formateur=JSON.parse(localStorage["formateur"]);
    }
    if(localStorage["apprenant"]){
      this.apprenant=JSON.parse(localStorage["apprenant"]);
    }
    this.listNotification();
  }
  logOut(){
    localStorage.removeItem('isLogin');
    localStorage.removeItem('loginStatus')
    location.replace("/");
}
listNotification(){
this.service.listNotification(this.vu,this.status).subscribe((data)=>{
  console.log(data);
  this.list =data
})
}


}
