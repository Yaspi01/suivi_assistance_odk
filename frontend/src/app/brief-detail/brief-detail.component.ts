import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-brief-detail',
  templateUrl: './brief-detail.component.html',
  styleUrls: ['./brief-detail.component.css']
})
export class BriefDetailComponent implements OnInit {
  id : any;
  dataBrief : any;
   constructor(private service : ServicesService,private router:Router,private route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.BriefById(this.id).subscribe((data)=>{
      console.log(data);
     this.dataBrief =data;
    })
  

}
}
