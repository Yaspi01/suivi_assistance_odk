package com.odk.apisuiviapprenant.service.apprenantService;

import com.odk.apisuiviapprenant.Etat;
import com.odk.apisuiviapprenant.enums.Type;
import com.odk.apisuiviapprenant.exception.ErrorCode;
import com.odk.apisuiviapprenant.exception.InvalidEntityException;
import com.odk.apisuiviapprenant.models.apprenantModel.Apprenant;
import com.odk.apisuiviapprenant.repositories.apprenantRepository.ApprenantRepository;
import com.odk.apisuiviapprenant.validators.ApprenantValidators;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class ApprenantServiceImpl implements ApprenantService{

    @Autowired
    ApprenantRepository apprenantRepository;

    @Override
    public Apprenant addApprenant(Apprenant apprenant) {
        apprenant.setType(Type.Apprenant);
        apprenant.setEtat(Etat.Activer);
        List<String> errors = ApprenantValidators.validate(apprenant);
        if (!errors.isEmpty()){
            throw new InvalidEntityException("Veillez remplir tous les champs!", ErrorCode.APPRENANT_NOT_VALID, errors);
        }
        List<Apprenant> apprenantEmail = apprenantRepository.findApprenantByEmail(apprenant.getEmail());
        if (!apprenantEmail.isEmpty()){
            throw new InvalidEntityException("Un autre apprenant existe avec cette adresse Email", ErrorCode.APPRENANT_ALREADY_EXISTE, errors);
        }

        List<Apprenant> apprenantLogin = apprenantRepository.findApprenantByLogin(apprenant.getLogin());
        if (!apprenantLogin.isEmpty()){
            throw new InvalidEntityException("Un autre apprenant existe avec ce login", ErrorCode.APPRENANT_ALREADY_EXISTE, errors);
        }

        List<Apprenant> apprenantTelephone = apprenantRepository.findApprenantByTelephone(apprenant.getTelephone());
        if (!apprenantTelephone.isEmpty()){
            throw new InvalidEntityException("Un autre apprenant existe avec ce numéro de téléphone", ErrorCode.APPRENANT_ALREADY_EXISTE, errors);
        }
        return apprenantRepository.save(apprenant);
    }

    @Override
    public List<Apprenant> allAprenants() {
        return apprenantRepository.findAll();
    }

    @Override
    public Apprenant apprenantById(Long id) {
        return apprenantRepository.findById(id).get();
    }

    @Transactional
    @Override
    public void deleteApprenant(Long id) {
        Apprenant apprenant = apprenantRepository.findById(id).get();
        apprenant.setSupprimer(true);
    }

    @Override
    public Apprenant updateApprenant(Apprenant apprenant, Long id) {
        Apprenant apprenantFound = apprenantRepository.findById(id).get();

        List<String> errors = ApprenantValidators.validate(apprenant);
        if (!errors.isEmpty()){
            throw new InvalidEntityException("Veillez remplir tous les champs!", ErrorCode.APPRENANT_NOT_VALID, errors);
        }
        apprenantFound.setPrenom(apprenant.getPrenom());
        apprenantFound.setNom(apprenant.getNom());
        apprenantFound.setLogin(apprenant.getLogin());
        apprenantFound.setEmail(apprenant.getEmail());
        apprenantFound.setGenre(apprenant.getGenre());
        apprenantFound.setEtat(apprenant.getEtat());
        apprenantFound.setSupprimer(apprenant.isSupprimer());
        apprenantFound.setAssister(apprenant.isAssister());
        apprenantFound.setTelephone(apprenant.getTelephone());
        apprenantFound.setMotDePass(apprenant.getMotDePass());
        return apprenantRepository.save(apprenantFound);
    }

    @Override
    public Apprenant authentification(String login, String motDePasse) {
        Optional<Apprenant> connexion = apprenantRepository.findApprenantByLoginAndMotDePass(login, motDePasse);

        if(connexion.isEmpty()){
            return null;
            //throw new InvalidEntityException("Login ou mot de passe incorrect", ErrorCode.APPRENANT_AUTHENTIFICATION_INVALID);
        }
        /*if(connexion.get().getEtat() == Etat.Desactiver || connexion.get().isSupprimer()){
            throw new InvalidEntityException("Votre compte a été supprimé", ErrorCode.APPRENANT_DESACTIVE_ACCOUNT);
        }
         */
        return connexion.get();
    }

    @Transactional
    @Override
    public void restaureAppre(Long id) {
        Apprenant apprenant = apprenantRepository.findById(id).get();
        apprenant.setEtat(Etat.Activer);
        apprenant.setSupprimer(false);
    }

    @Override
    public List<Apprenant> findApprenantByAssister(boolean assis) {
        return apprenantRepository.findApprenantByAssister(assis);
    }

    @Override
    public List<Apprenant> findApprenantNoByAssister(boolean assis) {
        return apprenantRepository.findApprenantByNonAssister(assis);
    }

    @Override
    public Apprenant updatePassword(Apprenant apprenant, Long id) {
        Apprenant apprenantFound = apprenantRepository.findById(id).get();
        apprenantFound.setMotDePass(apprenant.getMotDePass());
        apprenantFound.setAlreadyLogged(true);
        return apprenantRepository.save(apprenantFound);
    }

    @Override
    public List<Apprenant> addApprenantExcel(List<Apprenant> apprenants) {
        List<Apprenant> list = new ArrayList<>();
        for (int i=0;i<apprenants.size();i++){
            Apprenant app = new Apprenant();
            app.setPrenom(apprenants.get(i).getPrenom());
            app.setNom(apprenants.get(i).getNom());
            app.setEtat(Etat.Activer);
            app.setLogin(apprenants.get(i).getLogin());
            app.setMotDePass(apprenants.get(i).getMotDePass());
            app.setGenre(apprenants.get(i).getGenre());
            app.setEmail(apprenants.get(i).getEmail());
            app.setTelephone(apprenants.get(i).getTelephone());
            app.setType(apprenants.get(i).getType());
            Apprenant ap = apprenantRepository.saveAndFlush(app);
            list.add(ap);
        }
        return list;
    }

    @Override
    public Apprenant updateAssister(Apprenant apprenant, Long id) {
        apprenant = apprenantRepository.findById(id).get();
        apprenant.setAssister(true);
        return apprenantRepository.save(apprenant);
    }

    @Override
    public Apprenant firstLogin(Apprenant apprenant, Long id) {
        Apprenant apprenantFound = apprenantRepository.findById(id).get();
        apprenantFound.setMotDePass(apprenant.getMotDePass());
        apprenantFound.setAlreadyLogged(true);
        return apprenantRepository.save(apprenantFound);
    }
}
