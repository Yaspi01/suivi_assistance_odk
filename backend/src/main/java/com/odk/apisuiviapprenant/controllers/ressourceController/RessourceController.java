package com.odk.apisuiviapprenant.controllers.ressourceController;

import com.odk.apisuiviapprenant.models.authers.RessourseApprenant;
import com.odk.apisuiviapprenant.models.authers.RessourseApprenantServiceImpl;
import com.odk.apisuiviapprenant.models.ressourceModel.Ressource;
import com.odk.apisuiviapprenant.service.ressourceService.RessourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class RessourceController {

    @Autowired
    RessourceService ressourceService;

    @Autowired
    RessourseApprenantServiceImpl ressourseApprenantService;

    @PostMapping("addUrl")
    Ressource addUrl(@RequestBody Ressource ressource){
        return ressourceService.addUrl(ressource);
    }

    /*
        Ressource apprenant
    */
    @PostMapping("addUrlApprenant")
    RessourseApprenant addUrlApprenant(@RequestBody RessourseApprenant apprenant){
        return ressourseApprenantService.addUrl(apprenant);
    }

    /*
        Toutes ressource uploader par un apprenant
    */
    @GetMapping("ressourceByApprenant/{id}")
    List<RessourseApprenant> ressourceByApprenant(@PathVariable("id") Long id){
        return ressourseApprenantService.ressourceApprenantByIdApprenant(id);
    }

    /*
        List ressouce uploader par formateur
    */
    @GetMapping("ressourceByFormateur/{id}")
    List<Ressource> ressourceByFormateur(@PathVariable("id") Long id){
        return ressourceService.ressourceByFormateur(id);
    }

    /*
        Upload ressource Formateur
    */
    @PostMapping("uploadRessourceFormateur")
    Ressource uploadRessourceFormateur(Ressource ressource, @RequestParam("file") MultipartFile file) throws IOException {
        return ressourceService.addPdf(ressource, file);
    }

    /*
        Upload des ressource apprenant
    */
    @PostMapping("uploadRessource")
    RessourseApprenant uploadRessource(RessourseApprenant ressourseApprenant, @RequestParam("file") MultipartFile file) throws IOException {
        return ressourseApprenantService.addPdf(ressourseApprenant, file);
    }

    /*
        Ressource par apprenant envoyer par formateur
    */
    @GetMapping("ressourceSendByFormateurToApprenant/{id}")
    List<Ressource> ressourceSendByFormateurToApprenant(@PathVariable("id") Long id){
        return ressourceService.ressourceByApprenant(id);
    }

    /*
        Update ressourece
     */
    @PutMapping("updateRessource/{id}")
    Ressource updateRessource(@PathVariable("id") Long id, @RequestBody Ressource ressource){
       return ressourceService.updateRessourse(ressource, id);
    }

    /*
        Update ressource upload by apprenant
     */
    @PutMapping("updateRessourceApprenant/{id}")
    RessourseApprenant updateRessourceApprenant(@RequestBody RessourseApprenant ressource, @PathVariable("id") Long id){
        return ressourseApprenantService.updateRessourceApprenant(ressource, id);
    }
    /*
        Update ressource upload by formateur
     */
    @PutMapping("updateRessourceFormateur/{id}")
    Ressource updateRessourceFormateur(@RequestBody Ressource ressource, @PathVariable("id") Long id){
        return ressourceService.updateRessourse(ressource, id);
    }

    /*
        Get ressource by id uploaded par apprenant
     */
    @GetMapping(value = "oneRessourceUploadedByApprenant/{id}", produces = MediaType.APPLICATION_PDF_VALUE)
    byte[] oneRessourceUploadedByApprenant(@PathVariable("id") Long id) throws IOException {
        return ressourseApprenantService.getUploadedRessourceByApprenant(id);
    }

    /*
        Get ressource by id uploaded par formateur to apprenant
     */
    @GetMapping(value = "oneRessourceUploadedByFormateur/{id}", produces = MediaType.APPLICATION_PDF_VALUE)
    byte[] oneRessourceUploadedByFormateur(@PathVariable("id") Long id) throws IOException {
        return ressourceService.oneRessourceUploadedByFormateur(id);
    }
}
