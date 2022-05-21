package com.odk.apisuiviapprenant.controllers.renduController;

import com.odk.apisuiviapprenant.models.briefModel.Brief;
import com.odk.apisuiviapprenant.models.renduModel.Rendu;
import com.odk.apisuiviapprenant.service.renduService.RenduService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class RenduController {

    @Autowired
    RenduService renduService;

    @PostMapping("addRendu")
    Rendu addRendu(@RequestBody Rendu rendu){
        return renduService.addRendu(rendu);
    }

    @GetMapping("allRendu")
    List<Rendu> allRendu(){
        return renduService.allRendu();
    }

    @GetMapping("renduById/{id}")
    Rendu renduById(@PathVariable("id") Long id){
        return renduService.renduById(id);
    }

    @PutMapping("updateRendu/{id}")
    Rendu updateRendu(@RequestBody Rendu rendu, @PathVariable("id") Long id){
        return renduService.updateRendu(rendu, id);
    }
    @GetMapping("renduByBrief/{id}")
    List<Rendu> renduByBrief(@PathVariable("id") Long id){
        return renduService.renduByBrief(id);
    }

    @GetMapping("renduByApprenant/{id}")
    List<Rendu> renduByApprenant(@PathVariable("id") Long id){
        return renduService.renduByApprenant(id);
    }

    @GetMapping("updateRenduNote/{id}")
    void updateRenduNote(@RequestBody Rendu rendu, @PathVariable("id") Long id){
        renduService.updateRenduNote(rendu,id);
    }
}
