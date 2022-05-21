package com.odk.apisuiviapprenant.repositories.apprenantRepository;

import com.odk.apisuiviapprenant.models.apprenantModel.Apprenant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ApprenantRepository extends JpaRepository<Apprenant, Long> {

    Optional<Apprenant> findApprenantByLoginAndMotDePass(String login, String motDePasse);

    //Selct apprenant par son adresse email
    @Query(value = "SELECT ap FROM Apprenant ap WHERE ap.email = :email AND ap.etat = 'Activer'")
    List<Apprenant> findApprenantByEmail(@Param("email") String email);

    //select apprenant par son login
    @Query(value = "SELECT log FROM Apprenant log WHERE log.login = :login AND log.etat = 'Activer'")
    List<Apprenant> findApprenantByLogin(@Param("login") String login);

    //select apprenant par numero de telephone
    @Query(value = "SELECT tel FROM Apprenant tel WHERE tel.telephone = :telephone AND tel.etat = 'Activer'")
    List<Apprenant> findApprenantByTelephone(@Param("telephone") Long telephone);

    //select apprenant assister
    @Query(value = "SELECT assis FROM Apprenant assis WHERE assis.assister = true")
    List<Apprenant> findApprenantByAssister(@Param("assis") boolean assis);

    //select apprenant non assister
    @Query(value = "SELECT assis FROM Apprenant assis WHERE assis.assister = false")
    List<Apprenant> findApprenantByNonAssister(@Param("assis") boolean assis);
}
