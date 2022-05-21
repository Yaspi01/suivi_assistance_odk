package com.odk.apisuiviapprenant.service.briefService;


import com.odk.apisuiviapprenant.enums.Status;
import com.odk.apisuiviapprenant.models.authers.Constante;
import com.odk.apisuiviapprenant.models.authers.UploadFile;
import com.odk.apisuiviapprenant.models.briefModel.Brief;
import com.odk.apisuiviapprenant.models.evaluationModel.Evaluation;
import com.odk.apisuiviapprenant.repositories.briefRepository.BriefRepository;
import com.odk.apisuiviapprenant.repositories.evaluationRepository.EvaluationRepository;
import com.odk.apisuiviapprenant.service.MailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class BriefServiceImpl implements BriefService {


    @Autowired
    BriefRepository briefRepository;
    @Autowired
    MailSenderService senderService;

    @Autowired
    EvaluationRepository evaluationRepository;

    @Transactional
    @Override
    public Brief addBrief(Brief brief, @RequestParam("file") MultipartFile file) throws IOException {
        String fileNamne = StringUtils.cleanPath(file.getOriginalFilename());
        brief.setPhoto(fileNamne);

        Brief bf = briefRepository.save(brief);
        String uploadDir = "src/main/resources/files/"+brief.getId();
        UploadFile.saveFile(uploadDir, fileNamne, file);
        return bf;
    }

    @Override
    public List<Brief> allBrief() {
        return briefRepository.findAll();
    }

    @Override
    public Brief briefById(Long id) {
        return briefRepository.findById(id).get();
    }

    @Override
    public List<Brief> findBriefByApprenant(Long id) {
        return briefRepository.findBriefByApprenant(id);
    }

    @Transactional
    @Override
    public Brief updateBrief(Brief brief, Long id){
        Brief briefFound = briefRepository.findById(id).get();
        briefFound.setDescription(brief.getDescription());
        briefFound.setType(brief.getType());
        briefFound.setPhoto(brief.getPhoto());
        briefFound.setDate(brief.getDate());
        briefFound.setFormateur(brief.getFormateur());
        briefFound.setApprenant(brief.getApprenant());
        briefFound.setEvaluation(brief.getEvaluation());
        briefFound.setRendu(brief.getRendu());
        briefFound.setVus(brief.isVus());
        briefFound.setDateRendu(brief.getDateRendu());
        brief.getApprenant().setAssister(true);

        senderService.sendSimpleEmail(brief.getApprenant().getEmail(),
              "Bonjour " + brief.getApprenant().getPrenom() + " "+
                    brief.getApprenant().getNom() + "\n"+
                  "Votre formateur vous a envoyer un brief sur " +brief.getType()
                + "\n" + "Connecter vous a votre compte pour plus d'informations "
                      +Constante.URLFRONT+"/user"
        ,
        brief.getType());

        return briefRepository.save(briefFound);
    }

    @Override
    public Brief updateVusBrief(Brief brief, Long id) {
        brief = briefRepository.findById(id).get();
        brief.setVus(true);
        return briefRepository.save(brief);
    }

    @Override
    public List<Brief> briefByVusAndStatus(boolean vus, Status status) {
        return briefRepository.findBriefByVusAndStatus(vus, status);
    }



    @Override
    public Brief updateBriefStatus(Brief brief, Long id) {
        brief = briefRepository.findById(id).get();
        brief.setStatus(Status.Fait);
        return briefRepository.save(brief);
    }


    @Override
    public List<Brief> findBriefByFormateur(Long id) {
        return briefRepository.findBriefByFormateur(id);
    }

    @Override
    public byte[] getPhoto(Long id) throws IOException {
        Brief brief = briefRepository.getById(id);
        String iconPhoto = brief.getPhoto();
        File file = new File("src/main/resources/files/"+brief.getId() +"/"+ iconPhoto);

        Path path = Paths.get(file.toURI());
        return Files.readAllBytes(path);
    }

    @Override
    public List<Brief> briefByApprenantAndStatus(Status status) {
        return briefRepository.findBriefByApprenantAndStatus(status);
    }
}
