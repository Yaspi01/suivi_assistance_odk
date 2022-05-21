package com.odk.apisuiviapprenant.service.apprenantService;

import com.odk.apisuiviapprenant.models.apprenantModel.Apprenant;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ApprenantService {
    Apprenant addApprenant(Apprenant apprenant);
    List<Apprenant> allAprenants();
    Apprenant apprenantById(Long id);
    void deleteApprenant(Long id);
    Apprenant updateApprenant(Apprenant apprenant, Long id);
    Apprenant authentification(String login, String motDePasse);
    void restaureAppre(Long id);
    List<Apprenant> findApprenantByAssister(boolean assis);
    List<Apprenant> findApprenantNoByAssister(boolean assis);
    Apprenant updatePassword(Apprenant apprenant, Long id);
    List<Apprenant> addApprenantExcel(List<Apprenant> apprenants);
    Apprenant updateAssister(Apprenant apprenant, Long id);
    Apprenant firstLogin(Apprenant apprenant, Long id);
}
