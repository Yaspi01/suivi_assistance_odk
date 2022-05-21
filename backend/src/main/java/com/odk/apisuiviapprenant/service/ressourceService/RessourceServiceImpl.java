package com.odk.apisuiviapprenant.service.ressourceService;

import com.odk.apisuiviapprenant.models.authers.UploadFile;
import com.odk.apisuiviapprenant.models.ressourceModel.Ressource;
import com.odk.apisuiviapprenant.repositories.ressourceRepository.RessourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@Service
public class RessourceServiceImpl implements RessourceService {

    @Autowired
    RessourceRepository ressourceRepository;

    @Override
    public Ressource addUrl(Ressource ressource) {
        return ressourceRepository.save(ressource);
    }

    @Override
    public Ressource addPdf(Ressource ressource, MultipartFile file) throws IOException {
        String fileNamne = StringUtils.cleanPath(file.getOriginalFilename());
        ressource.setPdf(fileNamne);
        Ressource res = ressourceRepository.save(ressource);
        String uploadDir = "src/main/resources/files/"+ressource.getId();
        UploadFile.saveFile(uploadDir, fileNamne, file);
        return res;
    }

    @Override
    public List<Ressource> allRessource() {
        return null;
    }

    @Override
    public Ressource ressourceUrlById(Long id) {
        return null;
    }

    @Transactional
    @Override
    public void ressourceByPdf(MultipartFile file) {
        try {
            if(file.isEmpty()){
                throw new Exception("Ce fichier n'existe pas");
            }
            Path path = Paths.get("src/main/resources/files/"+file.getOriginalFilename());
            Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public Ressource updateRessourse(Ressource ressource, Long id){
        Ressource ressourceFound = ressourceRepository.findById(id).get();
        ressourceFound.setPdf(ressource.getPdf());
        ressourceFound.setLien(ressource.getLien());
        ressourceFound.setApprenant(ressource.getApprenant());
        ressourceFound.setFormateur(ressource.getFormateur());
        return ressourceRepository.save(ressourceFound);
    }

    @Override
    public byte[] oneRessourceUploadedByFormateur(Long id) throws IOException {
        Ressource ressourceByFormateur = ressourceRepository.findById(id).get();
        String ressource = ressourceByFormateur.getPdf();
        File file = new File("src/main/resources/files/pdf/"+ressourceByFormateur.getId()+"/"+ressource);

        Path path = Paths.get(file.toURI());
        return Files.readAllBytes(path);
    }

    @Override
    public List<Ressource> ressourceByFormateur(Long id) {
        return ressourceRepository.ressourceByFormateur(id);
    }

    @Override
    public List<Ressource> ressourceByApprenant(Long id) {
        return ressourceRepository.ressourceByApprenant(id);
    }

}
