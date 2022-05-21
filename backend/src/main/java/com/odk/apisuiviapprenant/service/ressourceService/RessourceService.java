package com.odk.apisuiviapprenant.service.ressourceService;

import com.odk.apisuiviapprenant.models.ressourceModel.Ressource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public interface RessourceService {
    Ressource addUrl(Ressource ressource);
    Ressource addPdf(Ressource ressource, MultipartFile file) throws IOException;
    List<Ressource> allRessource();
    Ressource ressourceUrlById(Long id);
    void ressourceByPdf(MultipartFile file);
    List<Ressource> ressourceByFormateur(Long id);
    List<Ressource> ressourceByApprenant(Long id);
    Ressource updateRessourse(Ressource ressource, Long id);
    byte[] oneRessourceUploadedByFormateur(Long id) throws IOException;
}
