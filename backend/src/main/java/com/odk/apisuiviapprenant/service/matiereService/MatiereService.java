package com.odk.apisuiviapprenant.service.matiereService;

import com.odk.apisuiviapprenant.models.matiereModel.Matiere;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public interface MatiereService {
    Matiere addMatiere(Matiere matiere, MultipartFile file) throws IOException;
    List<Matiere> allMatiere();
    Matiere matiereById(Long id);
    Matiere updateMatiere(Matiere matiere, Long id);
    byte[] getPhoto(Long id) throws IOException;

}
