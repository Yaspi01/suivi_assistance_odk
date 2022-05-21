package com.odk.apisuiviapprenant.validators;

import com.odk.apisuiviapprenant.models.formateurModel.Formateur;

import java.util.ArrayList;
import java.util.List;

public class FormateurValidators {

    public static List<String> validate(Formateur formateur){
        List<String> errors = new ArrayList<>();
        if(formateur == null){
            errors.add("Veillez renseigner le nom");
            errors.add("Veillez renseigner le nom");
        }
        return errors;
    }
}
