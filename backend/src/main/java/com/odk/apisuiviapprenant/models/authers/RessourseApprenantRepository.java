package com.odk.apisuiviapprenant.models.authers;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RessourseApprenantRepository extends JpaRepository<RessourseApprenant, Long> {

    @Query(value = "SELECT rp FROM RessourseApprenant rp WHERE rp.apprenant.id = :id")
    List<RessourseApprenant> findRessourseApprenantByApprenant(@Param("id") Long id);
}
