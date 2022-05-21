import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginInfo :any;
  constructor(private service : ServicesService,private router: Router, public toast: ToastrService,) { }

  ngOnInit(): void {
  }
 connexion(form: NgForm){
   this.service.loginformateur(form.value["username"],form.value["password"]).subscribe((data)=>{
  console.log(data);
  if(data){
    this.loginInfo = data;
    let loginStatus = true
    let formateur = true;
    location.replace("/accueil");

    localStorage.setItem('isLogin', JSON.stringify(this.loginInfo));
    localStorage.setItem('formateur', JSON.stringify(formateur));
    localStorage.setItem('userRole', JSON.stringify(this.loginInfo.type));
    localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
    
    console.log(this.loginInfo.type)
  }else{
    this.service.loginApprenant(form.value["username"],form.value["password"]).subscribe((data)=>{
      console.log(data);
      if(data){
      this.loginInfo = data;
     
      let loginStatus = true
      let apprenant = true;
      location.replace("/user");
      localStorage.setItem('isLogin', JSON.stringify(this.loginInfo));
      localStorage.setItem('apprenant', JSON.stringify(apprenant));
      localStorage.setItem('userRole', JSON.stringify(this.loginInfo.type));
     
      localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
    }else{
      this.toast.error("Login ou mot de passe incorrect");
      this.router.navigate(["/login"])
      let loginStatus = false;
      localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
      console.log("login non connecter");
    }
    },
    
    )
  }
  
 })
}
}
