package com.odk.apisuiviapprenant.service.matiereService;

import com.odk.apisuiviapprenant.models.authers.UploadFile;
import com.odk.apisuiviapprenant.models.matiereModel.Matiere;
import com.odk.apisuiviapprenant.repositories.matiereRepository.MatiereRepository;
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
public class MatiereServiceImpl implements MatiereService{

    @Autowired
    MatiereRepository matiereRepository;

    @Override
    public Matiere addMatiere(Matiere matiere, MultipartFile file) throws IOException{
        String fileNamne = StringUtils.cleanPath(file.getOriginalFilename());
        matiere.setPhoto(fileNamne);
        Matiere mat = matiereRepository.save(matiere);
        String uploadDir = "src/main/resources/files/"+matiere.getId();
        UploadFile.saveFile(uploadDir, fileNamne, file);
        return mat;
    }

    @Override
    public List<Matiere> allMatiere() {
        return matiereRepository.findAll();
    }

    @Override
    public Matiere matiereById(Long id) {
        return matiereRepository.findById(id).get();
    }

    @Override
    public Matiere updateMatiere(Matiere matiere, Long id) {
        Matiere matiereFound = matiereRepository.findById(id).get();
        matiereFound.setNom_matiere(matiere.getNom_matiere());
        matiereFound.setPhoto(matiere.getPhoto());
        return matiereRepository.save(matiere);
    }

    @Override
    public byte[] getPhoto(Long id) throws IOException {
        Matiere matiere = matiereRepository.getById(id);
        String icoPhoto = matiere.getPhoto();
        File file = new File("src/main/resources/files/" + matiere.getId()+"/"+icoPhoto);
        Path path = Paths.get(file.toURI());
        return Files.readAllBytes(path);
    }
}
