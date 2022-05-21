import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-list-matiere-apprenant',
  templateUrl: './list-matiere-apprenant.component.html',
  styleUrls: ['./list-matiere-apprenant.component.css']
})
export class ListMatiereApprenantComponent implements OnInit {
  img : any;
  list : any
    constructor(private service : ServicesService) { }
  
    ngOnInit(): void {
      this.AllMatiere();
      this.img=this.service.Photo
    }
    AllMatiere(){
      this.service.AllMatiere().subscribe((data)=>{
        console.log(data)
        this.list = data;
      })
    }

}
