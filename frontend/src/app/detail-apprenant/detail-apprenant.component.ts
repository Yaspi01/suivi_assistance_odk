import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-detail-apprenant',
  templateUrl: './detail-apprenant.component.html',
  styleUrls: ['./detail-apprenant.component.css']
})
export class DetailApprenantComponent implements OnInit {
  id : any;
  dataApprenant : any;
   constructor(private service : ServicesService,private router:Router,private route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.ApprenantById(this.id).subscribe((data)=>{
      console.log(data);
     this.dataApprenant =data;
    })
  }

}
