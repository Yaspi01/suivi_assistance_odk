import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddApprenantComponent } from './add-apprenant/add-apprenant.component';
import { AddBriefComponent } from './add-brief/add-brief.component';
import { AddByExcelComponent } from './add-by-excel/add-by-excel.component';
import { AddEvaluationComponent } from './add-evaluation/add-evaluation.component';
import { AddmatiereComponent } from './addmatiere/addmatiere.component';
import { BriefDetailComponent } from './brief-detail/brief-detail.component';
import { BriefComponent } from './brief/brief.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CorbeilleComponent } from './corbeille/corbeille.component';


import { DetailApprenantComponent } from './detail-apprenant/detail-apprenant.component';
import { DetailMatiereComponent } from './detail-matiere/detail-matiere.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { FormaBriefComponent } from './forma-brief/forma-brief.component';
import { FormaRessourceComponent } from './forma-ressource/forma-ressource.component';
import { FormaUrlComponent } from './forma-url/forma-url.component';
import { GuardloginGuard } from './guardlogin.guard';
import { ListApprenantComponent } from './list-apprenant/list-apprenant.component';
import { ListFormaRessourceComponent } from './list-forma-ressource/list-forma-ressource.component';
import { ListMatiereApprenantComponent } from './list-matiere-apprenant/list-matiere-apprenant.component';
import { ListMatiereComponent } from './list-matiere/list-matiere.component';
import { ListRessourceComponent } from './list-ressource/list-ressource.component';
import { LoginComponent } from './login/login.component';
import { RenduDetailFormaComponent } from './rendu-detail-forma/rendu-detail-forma.component';
import { RenduDetailComponent } from './rendu-detail/rendu-detail.component';
import { RenduNotificationComponent } from './rendu-notification/rendu-notification.component';
import { RenduComponent } from './rendu/rendu.component';


import { RessourceComponent } from './ressource/ressource.component';
import { UpdateApprenantComponent } from './update-apprenant/update-apprenant.component';
import { UpdateMatiereComponent } from './update-matiere/update-matiere.component';

import { UserBriefComponent } from './user-brief/user-brief.component';
import { UserRenduComponent } from './user-rendu/user-rendu.component';
import { UserRessourceComponent } from './user-ressource/user-ressource.component';
import { UserSpaceComponent } from './user-space/user-space.component';
import { UserUrlComponent } from './user-url/user-url.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'user', component: UserSpaceComponent},
  { path: 'userBrief', component: UserBriefComponent},

  { path: 'ressource', component: RessourceComponent},
  { path: 'userRendu', component: UserRenduComponent},
  
  { path: 'addBrief/:id', component: AddBriefComponent},
  { path: 'userRessource', component: UserRessourceComponent},
  {path : 'addApprenant', component: AddApprenantComponent},
  {path : 'formaBrief', component: FormaBriefComponent},
  {path : 'login', component: LoginComponent,canActivate:[GuardloginGuard]},
  {path : 'updateApprenant/:id', component: UpdateApprenantComponent},
  {path : 'detailApprenant/:id', component: DetailApprenantComponent},
  {path : 'brief', component: BriefComponent},
  {path : 'corbeille', component: CorbeilleComponent},
  {path : 'evaluation', component: EvaluationComponent},
  {path : 'addevaluation', component: AddEvaluationComponent},
  {path : 'briefDetail/:id', component: BriefDetailComponent},
  {path : 'renduDetail/:id', component: RenduDetailComponent},
  {path : 'rendu', component: RenduComponent},
  {path : 'formaressource', component: FormaRessourceComponent},
  {path : 'listRessource', component: ListRessourceComponent},
  {path : 'listFormaRessource', component: ListFormaRessourceComponent},
  {path : 'listMatiere', component: ListMatiereComponent},
  {path : 'addMatiere', component: AddmatiereComponent},
  {path : 'updateMatiere/:id', component: UpdateMatiereComponent},
  {path : 'addApprenantExcel', component:AddByExcelComponent},
  {path : 'connexion', component:ConnexionComponent},
  {path : 'renduDetailFor/:id', component:RenduDetailFormaComponent},
  {path : 'listApprenant', component:ListApprenantComponent},
  {path : 'listMaApprenant', component:ListMatiereApprenantComponent},
  {path : 'detailMatiere/:id', component:DetailMatiereComponent},
  {path : 'rendunot/:id', component:RenduNotificationComponent},
  {path : 'userurl', component:UserUrlComponent},
  {path : 'formapdf', component:FormaUrlComponent},
  { path: '**', redirectTo: '/login', pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
