import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-list-matiere',
  templateUrl: './list-matiere.component.html',
  styleUrls: ['./list-matiere.component.css']
})
export class ListMatiereComponent implements OnInit {
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
