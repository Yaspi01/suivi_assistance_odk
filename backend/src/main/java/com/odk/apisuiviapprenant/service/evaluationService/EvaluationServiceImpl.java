package com.odk.apisuiviapprenant.service.evaluationService;

import com.odk.apisuiviapprenant.enums.Niveau;
import com.odk.apisuiviapprenant.exception.InvalidEntityException;
import com.odk.apisuiviapprenant.models.evaluationModel.Evaluation;
import com.odk.apisuiviapprenant.repositories.evaluationRepository.EvaluationRepository;
import com.odk.apisuiviapprenant.service.MailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.odk.apisuiviapprenant.models.authers.Constante.URLFRONT;

@Service
public class EvaluationServiceImpl implements EvaluationService{

    @Autowired
    EvaluationRepository evaluationRepository;
    @Autowired
    MailSenderService senderService;

    @Override
    public Evaluation addEvaluation(Evaluation evaluation) {
        return evaluationRepository.save(evaluation);
    }

    @Override
    public List<Evaluation> allEvaluation() {
        return evaluationRepository.findAll();
    }

    @Override
    public Evaluation evaluationById(Long id) {
        return evaluationRepository.findById(id).get();
    }

    @Override
    public Evaluation updateEvaluation(Evaluation evaluation, Long id) {
        Evaluation evaluationFound = evaluationRepository.findById(id).get();
        evaluationFound.setNiveau(evaluation.getNiveau());
        evaluationFound.setApprenant(evaluation.getApprenant());
        evaluationFound.setMatiere(evaluationFound.getMatiere());
        evaluationFound.setBrief(evaluation.getBrief());
        return evaluationRepository.save(evaluationFound);
    }

    @Override
    public Evaluation updateNote(Evaluation evaluation, Long id){
        Evaluation evaluationFound = evaluationRepository.findById(id).get();
        evaluationFound.setNote(evaluation.getNote());
        evaluationFound.setNiveau(evaluation.getNiveau());
        evaluationFound.setApprenant(evaluation.getApprenant());
        evaluationFound.setMatiere(evaluationFound.getMatiere());
        evaluationFound.setBrief(evaluation.getBrief());
        if (evaluation.getNote() >= 15){
            evaluationFound.setNiveau(Niveau.Avancé);
        }
        if (evaluationFound.getNote() >= 10 && evaluationFound.getNote() < 15){
            evaluationFound.setNiveau(Niveau.Moyen);
        }
        if (evaluationFound.getNote() < 10){
            evaluationFound.setNiveau(Niveau.Faible);
        }
        if (evaluationFound.getNote() > 20 || evaluationFound.getNote() < 0){
            throw new InvalidEntityException("La note doit être comprise entre 0 et 20");
        }
        senderService.sendSimpleEmail(
                evaluation.getApprenant().getEmail(),"Bonjour "+evaluation.getApprenant().getPrenom()
                        +" "+evaluation.getApprenant().getNom()+"\n"
                +"Votre formateur a corrigé votre rendu sur le brief que vous venez de soumettre "+"\n"
                +"Connectez vous à votre compte pour plus d'information "+ URLFRONT+"/user", "Correction de brief");
        return evaluationRepository.save(evaluationFound);
    }

    @Override
    public List<Evaluation> findEvaluationByApprenant(Long id) {
        return evaluationRepository.findEvaluationByApprenant(id);
    }

    @Override
    public List<Evaluation> findEvaluationByMatiere(Long id) {
        return evaluationRepository.findEvaluationByMatiere(id);
    }
}
