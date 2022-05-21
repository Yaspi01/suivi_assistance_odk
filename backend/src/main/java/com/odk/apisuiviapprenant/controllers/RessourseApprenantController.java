package com.odk.apisuiviapprenant.controllers;

import com.odk.apisuiviapprenant.models.authers.RessourseApprenant;
import com.odk.apisuiviapprenant.models.authers.RessourseApprenantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/ressourceApprenant")
public class RessourseApprenantController {

    @Autowired
    RessourseApprenantService ressourseApprenantService;

    @PostMapping("/addUrl")
    RessourseApprenant addUrl(@RequestBody RessourseApprenant apprenant){
        return ressourseApprenantService.addUrl(apprenant);
    }

    @PostMapping("/uploadRessource")
    RessourseApprenant uploadRessource(RessourseApprenant apprenant, @PathVariable("file")MultipartFile multipartFile) throws IOException {
        return ressourseApprenantService.addPdf(apprenant, multipartFile);
    }

    @GetMapping("/ressouceByApprenant/{id}")
    List<RessourseApprenant> ressouceByApprenant(@PathVariable("id") Long id){
        return ressourseApprenantService.ressourceApprenantByIdApprenant(id);
    }
}
