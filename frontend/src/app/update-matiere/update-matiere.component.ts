import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-update-matiere',
  templateUrl: './update-matiere.component.html',
  styleUrls: ['./update-matiere.component.css']
})
export class UpdateMatiereComponent implements OnInit {
  id : any;
  dataMatiere : any;
   constructor(private service : ServicesService,private router:Router,private route:ActivatedRoute,) { }
 
   ngOnInit(): void {
     this.id = this.route.snapshot.params['id'];
     this.service.MatiereById(this.id).subscribe((data)=>{
       console.log(data);
      this.dataMatiere =data;
     })
   }

   onUpdate(){
    this.service.UpdateMatiere(this.id,this.dataMatiere).subscribe((data)=>{
     console.log((data+"ffffffff"));
     if(data){
       this.router.navigateByUrl("/listMatiere")
     }
    })
  }

}
