import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { User } from '../User';

@Component({
  selector: 'app-rendu',
  templateUrl: './rendu.component.html',
  styleUrls: ['./rendu.component.css']
})
export class RenduComponent implements OnInit {
  img : any;
 listBrief : any;
  constructor(private service : ServicesService) { }

  ngOnInit(): void {
    this.Brief();
    this.img=this.service.PhotoBrief
  }
  Brief(){
    this.service.getAllBrief().subscribe((data)=>{
      console.log(data);
      this.listBrief =data;
    })
  }
}