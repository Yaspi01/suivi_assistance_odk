package com.odk.apisuiviapprenant.service.formateurService;

import com.odk.apisuiviapprenant.models.formateurModel.Formateur;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface FormateurService {
    Formateur addFormateur(Formateur formateur);
    List<Formateur> allFormateur();
    Formateur authentification(String login, String motDePasse);
    Formateur formateurById(Long id);
    Formateur updateFormateur(Formateur formateur, Long id);
}
