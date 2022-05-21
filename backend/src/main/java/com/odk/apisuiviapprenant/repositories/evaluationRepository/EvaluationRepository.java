package com.odk.apisuiviapprenant.repositories.evaluationRepository;

import com.odk.apisuiviapprenant.models.evaluationModel.Evaluation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EvaluationRepository extends JpaRepository<Evaluation, Long> {

    @Query(value = "SELECT ev FROM Evaluation ev WHERE ev.apprenant.id = :id")
    List<Evaluation> findEvaluationByApprenant(@Param("id") Long id);

    @Query(value = "SELECT ev FROM Evaluation ev WHERE ev.matiere.id = :id")
    List<Evaluation> findEvaluationByMatiere(Long id);
}
