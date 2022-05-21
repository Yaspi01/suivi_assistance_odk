package com.odk.apisuiviapprenant.controllers.formateurController;

import com.odk.apisuiviapprenant.models.formateurModel.Formateur;
import com.odk.apisuiviapprenant.service.formateurService.FormateurService;
import com.odk.apisuiviapprenant.service.formateurService.FormateurServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class FormateurController {

    @Autowired
    FormateurService formateurService;

    @PostMapping("ajoutFormateur")
    Formateur ajoutFormateur(@RequestBody Formateur formateur){
        return formateurService.addFormateur(formateur);
    }

    @GetMapping("allFormateur")
    List<Formateur> allFormateur(){
        return formateurService.allFormateur();
    }

    @GetMapping("loginformateur/{login}&{motDePass}")
    Formateur connexion(@PathVariable("login") String login, @PathVariable("motDePass") String motDePass){
        return formateurService.authentification(login, motDePass);
    }
}
