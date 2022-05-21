package com.odk.apisuiviapprenant.service.evaluationService;

import com.odk.apisuiviapprenant.models.evaluationModel.Evaluation;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EvaluationService {
    Evaluation addEvaluation(Evaluation evaluation);
    List<Evaluation> allEvaluation();
    Evaluation evaluationById(Long id);
    Evaluation updateEvaluation(Evaluation evaluation, Long id);
    List<Evaluation> findEvaluationByApprenant(Long id);
    List<Evaluation> findEvaluationByMatiere(Long id);
    Evaluation updateNote(Evaluation evaluation, Long id);
}
