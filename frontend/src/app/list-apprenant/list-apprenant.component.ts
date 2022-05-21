import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-list-apprenant',
  templateUrl: './list-apprenant.component.html',
  styleUrls: ['./list-apprenant.component.css']
})
export class ListApprenantComponent implements OnInit {
  listApprenant : any;
  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.AllApprenant();
  }
  AllApprenant(){
    this.service.getAllApprenant().subscribe((data)=>{
      console.log(data)
      this.listApprenant =data;
      console.log(this.listApprenant.length)
    })
  }
}
