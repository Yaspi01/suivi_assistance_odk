package com.odk.apisuiviapprenant.repositories.briefRepository;

import com.odk.apisuiviapprenant.enums.Status;
import com.odk.apisuiviapprenant.models.briefModel.Brief;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface BriefRepository extends JpaRepository<Brief, Long> {
    @Query(value = "SELECT id FROM Brief id,Apprenant ap WHERE id.apprenant.id=ap.id and ap.id = :id")
    List<Brief> findBriefByApprenant(@Param("id") Long id);

    //Brief par formateur
    @Query(value = "SELECT id FROM Brief id WHERE id.formateur.id = :id")
    List<Brief> findBriefByFormateur(@Param("id") Long id);

    //Brief par vus et status
    @Query(value = "SELECT bf FROM Brief bf WHERE bf.vus =:vus AND bf.status =:status")
    List<Brief> findBriefByVusAndStatus(@Param("vus") boolean vus, @Param("status")Status status);

    @Query(value = "SELECT bf FROM Brief bf, Apprenant ap WHERE bf.apprenant.id = ap.id AND bf.status =:status")
    List<Brief> findBriefByApprenantAndStatus(@Param("status") Status status);

    //List<Brief> findBriefByStatus(Status status);
}
