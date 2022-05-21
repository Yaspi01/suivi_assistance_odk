package com.odk.apisuiviapprenant.controllers.evaluationController;

import com.odk.apisuiviapprenant.models.evaluationModel.Evaluation;
import com.odk.apisuiviapprenant.service.evaluationService.EvaluationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class EvaluationController {

    @Autowired
    EvaluationService evaluationService;

    @PostMapping("addEvaluation")
    Evaluation addEvaluation(@RequestBody Evaluation evaluation){
        return evaluationService.addEvaluation(evaluation);
    }

    @GetMapping("allEvaluation")
    List<Evaluation> allEvaluation(){
        return evaluationService.allEvaluation();
    }

    @GetMapping("evaluationById/{id}")
    Evaluation evaluationById(@PathVariable("id") Long id){
        return evaluationService.evaluationById(id);
    }

    @GetMapping("evaluationByApprenant/{id}")
    List<Evaluation> evaluationByApprenant(@PathVariable("id") Long id){
        return evaluationService.findEvaluationByApprenant(id);
    }

    @PutMapping("updateEvaluation/{id}")
    Evaluation updateEvaluation (@RequestBody Evaluation evaluation, @PathVariable("id") Long id){
        return evaluationService.updateNote(evaluation, id);
    }

    @GetMapping("evaluationByMatiere/{id}")
    List<Evaluation> evaluationByMatiere(@PathVariable("id") Long id){
        return evaluationService.findEvaluationByMatiere(id);
    }
}
