import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { ServicesService } from '../services.service';
import { ManyApprenant } from 'src/app/Model/many-apprenant';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

type AOA = any[];
@Component({
  selector: 'app-add-by-excel',
  templateUrl: './add-by-excel.component.html',
  styleUrls: ['./add-by-excel.component.css']
})
export class AddByExcelComponent implements OnInit {

  apprenant : any;
  keys!:string[];
  dataSheet= new Subject();
  @ViewChild('inputFile') inputFile!: ElementRef;
  isExcelFile!:boolean;
  apprenants:any[]=[];
  data:any;
  spinnerEnabled = false;
  manyApprenant: ManyApprenant = new ManyApprenant();

  name = 'Angular';
  fileName: string = 'SheetJS.xlsx';
  datas: any;
  headData: any // en tete de ligne excel

  constructor(private service : ServicesService, private router: Router) { }

  ngOnInit(): void {
  }

  onFileChange(evt: any){
    const target : DataTransfer = <DataTransfer>(evt.target);
    this.isExcelFile = !!target.files[0].name.match(/(.xls|xlsx)/);
    if(target.files.length > 1){
      this.inputFile.nativeElement.value = '';
    }

    if(this.isExcelFile){
      this.apprenants = [];
      this.spinnerEnabled = true;
      const reader: FileReader = new FileReader();

      reader.onload = (e: any)=>{
        // lire le classeur
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary'});

        // saisir la première feuille
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        
        // enregistrer des données
        this.datas = XLSX.utils.sheet_to_json(ws);
        console.log(this.datas);
        const ws2: XLSX.WorkSheet = wb.Sheets[wb.SheetNames[1]];
        this.readDataSheet(ws2, 10);
      };

        reader.readAsBinaryString(target.files[0]);
        reader.onloadend = (e) => {
          this.spinnerEnabled = false;
          this.keys = Object.keys(this.datas[0]);
        }

        this.PreviewFichier(evt);
    }else{
      this.inputFile.nativeElement.value = '';
    };
  }

  PreviewFichier(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>evt.target;
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>(
        XLSX.utils.sheet_to_json(ws, { header: 1, raw: false, range: 0 })
      );
      console.log(this.data[1]);

      this.headData = this.data[0];
      this.data = this.data.slice(1); // remove first header record

      const ws2: XLSX.WorkSheet = wb.Sheets[wb.SheetNames[1]];
      this.readDataSheet(ws2, 10);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  private readDataSheet(ws: XLSX.WorkSheet, startRow: number) {
    /* save data */
    let datas = <AOA>(
      XLSX.utils.sheet_to_json(ws, { header: 1, raw: false, range: startRow })
    );
    console.log(datas[1]);
    let headDatas = datas[0];
    datas = datas.slice(1); // remove first header record

    for (let i = 0; i < this.data.length; i++) {
      this.data[i][this.headData.length] = datas.filter(
        (x) => x[12] == this.data[i][0]
      );
    }
    console.log(this.data[1]);
  }

  annuler(){
    window.location.reload();
    this.router.navigateByUrl('/accueil')
  }

  addByFichier(){
    for(let i = 0; i < this.datas.length; i++){
      this.apprenants.push({
        prenom:this.datas[i].prenom,
        nom:this.datas[i].nom,
        login:this.datas[i].login,
        motDePass:this.datas[i].motDePass,
        genre:this.datas[i].genre,
        email:this.datas[i].email,
        telephone:this.datas[i].telephone,
        type:this.datas[i].type
      })
    }
    this.manyApprenant.apprenant = this.apprenants

    this.service.addApprenantExcel(this.apprenants).subscribe((data:any)=>{
      console.log(data)
      if(data){
        console.log("ajouter")
        this.router.navigateByUrl("/accueil");
        this.presentToast();
      }else{
        console.log("non ajouter")

      }
    })
  }
  presentToast(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Apprenants enregistrer avec succès',
      showConfirmButton: false,
      timer: 2000
    })
  }

}
