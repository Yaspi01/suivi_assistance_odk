import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-list-forma-ressource',
  templateUrl: './list-forma-ressource.component.html',
  styleUrls: ['./list-forma-ressource.component.css']
})
export class ListFormaRessourceComponent implements OnInit {
  listRessource : any;
  loginData : any;
  constructor(private service : ServicesService) { }

  ngOnInit(): void {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    this.AllRessourceByApprenant();
  }
  AllRessourceByApprenant(){
    this.service.RessourceParFormateur(this.loginData.id).subscribe((data)=>{
      
      this.listRessource = data
      console.log(this.listRessource)
    })
  }

}
