import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormateurGuard implements CanActivate {
  constructor(
    private router: Router,
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      let loginData =localStorage["isLogin"];
      if(loginData){
      let userRole =localStorage["userRole"];
      console.log("treyrwefgrker"+userRole);
      if(userRole=="Formateur"){
       // location.replace("/accueil");
        return true;
      
      }
     
    
  }
  this.router.navigate(["/login"]);
  return false;
}
  
}
