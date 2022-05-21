package com.odk.apisuiviapprenant.validators;

import com.odk.apisuiviapprenant.models.apprenantModel.Apprenant;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

public class ApprenantValidators {

    public static List<String> validate(Apprenant apprenant){
        List<String> errors = new ArrayList<>();

        //Si tous les champs sont null
        if (apprenant == null){
            errors.add("Veillez saisir un nom");
            errors.add("Veillez saisir un prenom");
            errors.add("Veillez saisir une adresse email");
            errors.add("Veillez saisir un login");
            errors.add("Veillez saisir un mot de passe");
            return errors;
        }

        //Pour les champs obligatoirs
        if (!StringUtils.hasLength(apprenant.getNom())){
            errors.add("Veillez saisir un nom");
        }
        if (!StringUtils.hasLength(apprenant.getPrenom())){
            errors.add("Veillez saisir un prenom");
        }
        if (!StringUtils.hasLength(apprenant.getEmail())){
            errors.add("Veillez saisir une adresse email");
        }
        if (!StringUtils.hasLength(apprenant.getLogin())){
            errors.add("Veillez saisir un login");
        }
        if (!StringUtils.hasLength(apprenant.getMotDePass())){
            errors.add("Veillez saisir un mot de passe");
        }
        return errors;
    }
}
