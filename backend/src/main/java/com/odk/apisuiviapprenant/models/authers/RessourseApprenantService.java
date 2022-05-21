package com.odk.apisuiviapprenant.models.authers;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public interface RessourseApprenantService {
    RessourseApprenant addUrl(RessourseApprenant ressource);
    RessourseApprenant addPdf(RessourseApprenant ressource, MultipartFile file) throws IOException;
    List<RessourseApprenant> allRessource();
    List<RessourseApprenant> ressourceApprenantByIdApprenant(Long id);
    RessourseApprenant updateRessourceApprenant(RessourseApprenant apprenant, Long id);
    byte[] getUploadedRessourceByApprenant(Long id) throws IOException;
}
