package com.odk.apisuiviapprenant.models.authers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class RessourseApprenantServiceImpl implements RessourseApprenantService{

    @Autowired
    RessourseApprenantRepository ressourseApprenantRepository;

    @Override
    public RessourseApprenant addUrl(RessourseApprenant ressource) {
        return ressourseApprenantRepository.save(ressource);
    }

    @Override
    public RessourseApprenant addPdf(RessourseApprenant ressource, MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        ressource.setPdf(fileName);
        RessourseApprenant res = ressourseApprenantRepository.save(ressource);
        String uploadDir = "src/main/resources/files/pdf/"+ressource.getId();
        UploadFile.saveFile(uploadDir, fileName, file);
        return res;
    }

    @Override
    public RessourseApprenant updateRessourceApprenant(RessourseApprenant apprenant, Long id){
        RessourseApprenant apprenantFound = ressourseApprenantRepository.findById(id).get();
        apprenantFound.setApprenant(apprenant.getApprenant());
        apprenantFound.setPdf(apprenant.getPdf());
        apprenantFound.setUrl(apprenant.getUrl());
        return ressourseApprenantRepository.save(apprenantFound);
    }

    @Override
    public byte[] getUploadedRessourceByApprenant(Long id) throws IOException {
        RessourseApprenant ressourseApprenant = ressourseApprenantRepository.findById(id).get();
        String ressource = ressourseApprenant.getPdf();
        File file = new File("src/main/resources/files/pdf/"+ressourseApprenant.getId()+"/"+ressource);

        Path path = Paths.get(file.toURI());
        return Files.readAllBytes(path);
    }

    @Override
    public List<RessourseApprenant> allRessource() {
        return ressourseApprenantRepository.findAll();
    }

    @Override
    public List<RessourseApprenant> ressourceApprenantByIdApprenant(Long id) {
        return ressourseApprenantRepository.findRessourseApprenantByApprenant(id);
    }
}
