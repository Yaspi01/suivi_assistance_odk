import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rendu-detail',
  templateUrl: './rendu-detail.component.html',
  styleUrls: ['./rendu-detail.component.css']
})
export class RenduDetailComponent implements OnInit {
  loginData: any;

  brief: any;
  formgroup: FormGroup;
  apprenant: any
  list: any
  submitted = false;
  id: any;
  dataRendu: any;
  constructor(private service: ServicesService, private router: Router, private route: ActivatedRoute, public formBuilder: FormBuilder,) { }

  ngOnInit(): void {



    this.loginData = JSON.parse(localStorage["isLogin"]);

    this.formgroup = this.formBuilder.group({
      url: ['', Validators.required],
      message: ['', Validators.required],
      brief: [''],
      //confirmPassword: ['', Validators.required],
      //acceptTerms: [false, Validators.requiredTrue] //Checkbox For accept conditions 
    });
    this.id = this.route.snapshot.params['id'];
    this.service.BriefById(this.id).subscribe((data) => {
      console.log(data);
      this.dataRendu = data;
      console.log(this.dataRendu.id)
      this.listRenduParBrief();
    });


  }

  get f() { return this.formgroup.controls; }

  listRenduParBrief() {
    this.service.RenduParBrief(this.dataRendu.id).subscribe((data) => {
      console.log(data)
      this.list = data;
    })
  }

  ajouterRendu(fg: FormGroup) {
    this.submitted = true;



    // stop here if form is invalid
    if (this.formgroup.invalid) {
      return;
    }

    var obj: { [id: string]: any } = {};
    obj['id'] = fg.value.brief;
    fg.value.brief = obj;

    var obj1: { [id: string]: any } = {};
    obj1['id'] = this.loginData.id;
    fg.value.apprenant = obj1;

    this.brief = fg.value.brief;

    console.log(JSON.stringify(fg.value));
    this.service.addRendu(fg.value).subscribe((data) => {
      if (data) {
        this.service.UpdateStatusBrief(this.id, this.dataRendu).subscribe((data) => {
          console.log("ajout effectuer avec succès");

          this.router.navigateByUrl("/userRendu");
          this.presentToast();
        })

      }
    })

  }

  presentToast() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Rendu envoyer avec succès',
      showConfirmButton: false,
      timer: 3000
    })
  }

}
