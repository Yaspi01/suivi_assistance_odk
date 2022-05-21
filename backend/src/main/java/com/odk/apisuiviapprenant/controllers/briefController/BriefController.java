package com.odk.apisuiviapprenant.controllers.briefController;

import com.odk.apisuiviapprenant.enums.Status;
import com.odk.apisuiviapprenant.models.briefModel.Brief;
import com.odk.apisuiviapprenant.service.briefService.BriefService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class BriefController {

    @Autowired
    BriefService briefService;

    @PostMapping("ajoutBrief")
    Brief addBrief( Brief brief, @RequestParam("file") MultipartFile file) throws IOException {
        return briefService.addBrief(brief, file);
    }

    @GetMapping("allBrief")
    List<Brief> allBrief(){
        return briefService.allBrief();
    }

    @GetMapping("briefById/{id}")
    Brief briefById(@PathVariable("id")Long id){
        return briefService.briefById(id);
    }

    @GetMapping("findBriefByApprenant/{id}")
    List<Brief> findBriefByApprenant(@PathVariable("id") Long id){

        return briefService.findBriefByApprenant(id);
    }

    /*
        Pour recupere une photo en fonction de son ID
    */
    @GetMapping(value = "findBriefPhoto/{id}", produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})
    byte[] findPhoto(@PathVariable("id") Long id) throws IOException{
        return briefService.getPhoto(id);
    }

    @PutMapping("updateBrief/{id}")
    Brief updateBrief(@RequestBody Brief brief, @PathVariable("id") Long id){
        return briefService.updateBrief(brief, id);
    }

    @PutMapping("updateVusBrief/{id}")
    Brief updateVusBrief(@RequestBody Brief brief, @PathVariable("id") Long id){
        return briefService.updateVusBrief(brief, id);
    }

    @GetMapping("briefByVusAndStatus/{vus}&{status}")
    List<Brief> briefByVusAndStatus(@PathVariable("vus") boolean vus, @PathVariable("status")Status status){
        return briefService.briefByVusAndStatus(vus, status);
    }

    @PutMapping("updateBriefStatus/{id}")
    Brief updateBriefStatus(@RequestBody Brief brief, @PathVariable("id") Long id){
        return briefService.updateBriefStatus(brief, id);
    }

    @GetMapping("briefByApprenantAndStatus/{status}")
    List<Brief> briefByApprenantAndStatus(@PathVariable("status") Status status){
        return briefService.briefByApprenantAndStatus(status);
    }
}
