package com.odk.apisuiviapprenant.repositories.renduRepository;

import com.odk.apisuiviapprenant.models.renduModel.Rendu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RenduRepository extends JpaRepository<Rendu, Long> {

    @Query(value = "SELECT red FROM Rendu red, Brief bf WHERE red.brief.id = bf.id AND bf.id = :id")
    List<Rendu> renduByBrief(@Param("id") Long id);

    @Query(value = "SELECT red FROM Rendu red, Brief bf, Apprenant ap WHERE " +
            "red.brief.id = bf.id AND red.apprenant.id =  ap.id AND ap.id= :id")
    List<Rendu> renduByApprenant(@Param("id") Long id);
}
