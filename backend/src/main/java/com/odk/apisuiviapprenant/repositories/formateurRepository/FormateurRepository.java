package com.odk.apisuiviapprenant.repositories.formateurRepository;

import com.odk.apisuiviapprenant.models.formateurModel.Formateur;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FormateurRepository extends JpaRepository<Formateur, Long> {

    Optional<Formateur> findFormateurByLoginAndMotDePass(String login, String motDePasse);
}
