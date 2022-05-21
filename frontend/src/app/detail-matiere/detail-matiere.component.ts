import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-detail-matiere',
  templateUrl: './detail-matiere.component.html',
  styleUrls: ['./detail-matiere.component.css']
})
export class DetailMatiereComponent implements OnInit {
  img : any;
  listEvaluation : any;
  id : any
   constructor(private service: ServicesService,private router:Router,private route:ActivatedRoute,) { }
 
   ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
      this.service.MatiereByEvaluation(this.id).subscribe((data)=>{
        
        this.listEvaluation = data;
        console.log(this.listEvaluation[0].matiere.nom_matiere)
      })
    
     this.img = this.service.Photo
     
   }


}
