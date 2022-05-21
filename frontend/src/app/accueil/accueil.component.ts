import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { ServicesService } from '../services.service';
import { User } from '../User';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {
  p: number = 1;
  listApprenantNonAssister : any;
  listApprenantAssister : any;
  listApprenant : any;
  apprenant : any;
  searchText:any;
  assister =0;
  NonAssister =1;
  selectedAdmin :any;
  constructor(private service: ServicesService, private confirmationDialogService: ConfirmationDialogService,  private router :Router) { }

  ngOnInit(): void {
    this.AllApprenant();
    this.AllNonassister();
    this.Allassister()
  }
  AllApprenant(){
    this.service.getAllApprenant().subscribe((data)=>{
      console.log(data)
      this.listApprenant =data;
      console.log(this.listApprenant.length)
    })
  }
  SuppApprenant(id : any):void{
    if(confirm("Voulez-vous supprimer ??")){
    this.service.deleteApprenant(id).subscribe((data)=>{
      console.log(data)
     
      this.AllApprenant();
     
    });
  }
}
public onSelectAdmin(selectedAdmin: User ): void {
    this.selectedAdmin = selectedAdmin;
    this.clickButton('openUserInfo');
  }
private clickButton(buttonId: string): void {
    document.getElementById(buttonId)?.click()
  }
AllNonassister(){
  this.service.ApprenantNonAssister(this.NonAssister).subscribe((data)=>{
    this.listApprenantNonAssister = data;
    console.log(this.listApprenantNonAssister.length)
  })
}
Allassister(){
  this.service.ApprenantAssister(this.assister).subscribe((data)=>{
    this.listApprenantAssister = data;
    console.log(this.listApprenantAssister.length)
  })
}
public openConfirmationDialog(id:any) {
  this.confirmationDialogService.confirm('Veuillez confirmer ..', 'Voulez-vous supprimer ... ?')
  .then((confirmed) => 

  this.service.deleteApprenant(id).subscribe((data)=>{
    console.log(data); 
    this.AllApprenant();

  }))
  .catch(
    () => 
    console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
}



}
