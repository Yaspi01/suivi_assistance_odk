import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-corbeille',
  templateUrl: './corbeille.component.html',
  styleUrls: ['./corbeille.component.css']
})
export class CorbeilleComponent implements OnInit {
  listApprenant : any;
  apprenant : any;
  searchText:any;

  constructor(private service: ServicesService, private confirmationDialogService: ConfirmationDialogService,  private router :Router) { }

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
  RestoreApprenant(id : any):void{
    if(confirm("Voulez-vous restaurer ??")){
    this.service.restoreApprenant(id).subscribe((data)=>{
      console.log(data)
     
      this.AllApprenant();
     
    });
  }
}
public openConfirmationDialog(id:any) {
  this.confirmationDialogService.confirm('Veuillez confirmer ..', 'Voulez-vous supprimer ... ?')
  .then((confirmed) => 

  this.service.restoreApprenant(id).subscribe((data)=>{
    console.log(data); 
    this.AllApprenant();

  }))
  .catch(
    () => 
    console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
}

}
