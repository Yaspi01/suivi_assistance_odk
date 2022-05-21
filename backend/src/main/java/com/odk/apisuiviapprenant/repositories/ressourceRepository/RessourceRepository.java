package com.odk.apisuiviapprenant.repositories.ressourceRepository;

import com.odk.apisuiviapprenant.models.ressourceModel.Ressource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RessourceRepository extends JpaRepository<Ressource, Long> {
    @Query(value = "SELECT res FROM Ressource res WHERE res.apprenant.id = :id")
    List<Ressource> ressourceByApprenant(@Param("id") Long id);

    @Query(value = "SELECT for FROM Ressource for WHERE for.formateur.id = :id")
    List<Ressource> ressourceByFormateur(@Param("id") Long id);
}
