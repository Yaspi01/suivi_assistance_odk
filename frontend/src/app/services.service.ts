import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url='http://localhost:8080/api/';
  Photo='http://localhost:8080/api/findMatierePhoto/';
  PhotoBrief='http://localhost:8080/api/findBriefPhoto/';

  

  constructor(
    private http : HttpClient)
     { }

     getAllApprenant(){
      return this.http.get(this.url+"allApprenant");
    }
    addApprenant(data:any){
      return this.http.post(this.url+"ajoutApprenant",data);
    }
    deleteApprenant(id:any){
      return this.http.delete(this.url+"deleteApprenant/"+id,{responseType:'text'});
  }
  restoreApprenant(id:any){
    return this.http.delete(this.url+"restoreApprenant/"+id,{responseType:'text'});
}
  loginformateur(login :String,password : String){
    return this.http.get(this.url+"loginformateur/"+login+"&"+password)
  }
  loginApprenant(login :String,password : String){
    return this.http.get(this.url+"login/"+login+"&"+password)
  }
  listNotification(vu :any,status : String){
    return this.http.get(this.url+"briefByVusAndStatus/"+vu+"&"+status)
  }
  updateApprenant(id: number, data: any){
    return this.http.put(this.url+"updateApprenant/"+id,data);
  }
  ApprenantById(id:any){
    return this.http.get(this.url +"apprenantById/"+ id);
  }
  ApprenantNonAssister(assister:any){
    return this.http.get(this.url +"allApprenantNonAssister/"+ assister);
  }
  ApprenantAssister(assister:any){
    return this.http.get(this.url +"allApprenantAssister/"+ assister);
  }
  getAllBrief(){
    return this.http.get(this.url+"allBrief");
  }
  addBrief(data:any, photo: File): Observable<any>{
    const formData: FormData = new FormData();
      formData.append("file", photo);
    return this.http.post(this.url+"ajoutBrief",formData);
  }
  addPDF(data:any, pdf: File): Observable<any>{
    const formData: FormData = new FormData();
      formData.append("file", pdf);
    return this.http.post(this.url+"uploadRessource",formData);
  }
  addPDFFormateur(data:any, pdf: File): Observable<any>{
    const formData: FormData = new FormData();
      formData.append("file", pdf);
    return this.http.post(this.url+"uploadRessourceFormateur",formData);
  }
  ApprenantBrief(brief:any){
    return this.http.get(this.url +"findBriefByApprenant/"+ brief);
  }
  addevaluation(data:any){
    return this.http.post(this.url+"addEvaluation",data);
  }
  getAllMatiere(){
    return this.http.get(this.url+"allMatiere");
  }
  getAllEvaluation(){
    return this.http.get(this.url+"allEvaluation");
  }
  ApprenantEvaluation(evaluation:any){
    return this.http.get(this.url +"evaluationByApprenant/"+ evaluation);
  }
  BriefById(id:any){
    return this.http.get(this.url +"briefById/"+ id);
  }
  EvaluationById(id:any){
    return this.http.get(this.url +"evaluationById/"+ id);
  }
  addRendu(data:any){
    return this.http.post(this.url+"addRendu",data);
  }
  getAllRendu(){
    return this.http.get(this.url+"allRendu");
  }
  addRessourceApprenant(data:any){
    return this.http.post(this.url+"addUrlApprenant",data);
  }
  RessourceParApprenant(apprenant:any){
    return this.http.get(this.url +"ressourceByApprenant/"+ apprenant);
  }
  addRessourceFormateur(data:any){
    return this.http.post(this.url+"addUrl",data);
  }
  RessourceParFormateur(formateur:any){
    return this.http.get(this.url +"ressourceByFormateur/"+ formateur);
  }
  RenduParBrief(Brief:any){
    return this.http.get(this.url +"renduByBrief/"+ Brief);
  }
  RessourceParToApprenant(apprenant:any){
    return this.http.get(this.url +"ressourceSendByFormateurToApprenant/"+ apprenant);
  }
  UpdateBrief(id :number,data:any){
    return this.http.put(this.url +"updateBrief/"+id,data);
  }
  UpdateRessource(id :number,data:any){
    return this.http.put(this.url +"updateRessourceApprenant/"+id,data);
  }
  UpdateRessourceFormateur(id :number,data:any){
    return this.http.put(this.url +"updateRessourceFormateur/"+id,data);
  }
  UpdateStatusBrief(id :number,data:any){
    return this.http.put(this.url +"updateBriefStatus/"+id,data);
  }

  UpdateAssiter(id :number,data :any){
    return this.http.put(this.url +"updateAssister/"+id,data);
  }

  UpdateVu(id :number,data :any){
    return this.http.put(this.url +"updateVusBrief/"+id,data);
  }
  UpdateEvaluation(id :number,data:any){
    return this.http.put(this.url +"updateEvaluation/"+id,data);
  }
  AllMatiere(){
    return this.http.get(this.url+"allMatiere");
  }
    addMatiere(data:any, photo: File): Observable<any>{
      const formData: FormData = new FormData();
      formData.append("file", photo);
      return this.http.post(this.url+"addMatiere",formData)
    }
   
  UpdateMatiere(id :number,data:any){
    return this.http.put(this.url +"updateMatiere/"+id,data);
  }
  MatiereById(id:any){
    return this.http.get(this.url +"matiereById/"+ id);
  }
  RenduByBriefId(id:any){
    return this.http.get(this.url +"renduByApprenant/"+ id);
  }
  MatiereByEvaluation(id:any){
    return this.http.get(this.url +"evaluationByMatiere/"+ id);
  }

   //ajout par excel
  addApprenantExcel(data:any){
    return this.http.post(this.url+"addByExcel", data)
  }

}
