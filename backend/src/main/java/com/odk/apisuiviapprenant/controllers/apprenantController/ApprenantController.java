package com.odk.apisuiviapprenant.controllers.apprenantController;

import com.odk.apisuiviapprenant.models.apprenantModel.Apprenant;
import com.odk.apisuiviapprenant.service.apprenantService.ApprenantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class ApprenantController {

    @Autowired
    ApprenantService apprenantService;

    @PostMapping("ajoutApprenant")
    Apprenant ajoutApprenant(@RequestBody Apprenant apprenant){
        return apprenantService.addApprenant(apprenant);
    }

    @GetMapping("allApprenant")
    List<Apprenant> allAprenant(){
        return apprenantService.allAprenants();
    }

    @GetMapping("apprenantById/{id}")
    Apprenant apprenantById(@PathVariable("id")Long id){
        return apprenantService.apprenantById(id);
    }

    @DeleteMapping("deleteApprenant/{id}")
    void deleteApprenant(@PathVariable("id")Long id){
        apprenantService.deleteApprenant(id);
    }

    @PutMapping("updateApprenant/{id}")
    Apprenant updateApprenant(@RequestBody Apprenant apprenant, @PathVariable("id") Long id){
        return apprenantService.updateApprenant(apprenant, id);
    }

    @GetMapping("login/{login}&{motDePass}")
    Apprenant connexion(@PathVariable("login") String login, @PathVariable("motDePass") String motDePasse){
        return apprenantService.authentification(login, motDePasse);
    }

    @DeleteMapping("restoreApprenant/{id}")
    void restoreApprenant(@PathVariable("id") Long id){
        apprenantService.restaureAppre(id);
    }

    @GetMapping("allApprenantAssister/{assis}")
    List<Apprenant> allApprenantAssister(@PathVariable("assis")boolean assis){
        return apprenantService.findApprenantByAssister(assis);
    }

    @GetMapping("/allApprenantNonAssister/{assis}")
    List<Apprenant> allApprenantNonAssister(@PathVariable("assis")boolean assis){
        return apprenantService.findApprenantNoByAssister(assis);
    }

    @PostMapping("updatePassword/{id}")
    Apprenant updatePassword(Apprenant apprenant, @PathVariable("id") Long id){
        return apprenantService.updatePassword(apprenant, id);
    }

    @PostMapping("addByExcel")
    List<Apprenant> addByExcel(@RequestBody List<Apprenant> apprenant){
        return apprenantService.addApprenantExcel(apprenant);
    }

    @PutMapping("updateAssister/{id}")
    Apprenant updateAssiter(@RequestBody Apprenant apprenant, @PathVariable("id") Long id){
        return apprenantService.updateAssister(apprenant, id);
    }

    @PutMapping("firstLogin/{id}")
    Apprenant firstLogin(@RequestBody Apprenant apprenant, @PathVariable("id") Long id){
        return apprenantService.firstLogin(apprenant, id);
    }
}
