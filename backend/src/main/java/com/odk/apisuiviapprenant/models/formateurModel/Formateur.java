package com.odk.apisuiviapprenant.models.formateurModel;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.odk.apisuiviapprenant.Etat;
import com.odk.apisuiviapprenant.enums.Type;
import com.odk.apisuiviapprenant.models.apprenantModel.Apprenant;
import com.odk.apisuiviapprenant.models.briefModel.Brief;
import com.odk.apisuiviapprenant.models.matiereModel.Matiere;
import com.odk.apisuiviapprenant.models.ressourceModel.Ressource;

import javax.persistence.*;
import java.util.List;

@Entity
public class Formateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;

    private String prenom;

    private String email;

    private int telephone;

    private String login;

    private String motDePass;

    private Etat etat;

    private Type type;

    @OneToMany(mappedBy = "formateur")
    @JsonIgnore
    private List<Apprenant> apprenants;

    @OneToMany(mappedBy = "formateur")
    @JsonIgnore
    private List<Brief> brief;

    @JsonIgnore
    @OneToMany(mappedBy = "formateur")
    private List<Ressource> ressource;

    @JsonIgnore
    @OneToMany(mappedBy = "formateur")
    private List<Matiere> matiere;

    public Formateur() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getTelephone() {
        return telephone;
    }

    public void setTelephone(int telephone) {
        this.telephone = telephone;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getMotDePass() {
        return motDePass;
    }

    public void setMotDePass(String motDePass) {
        this.motDePass = motDePass;
    }

    public Etat getEtat() {
        return etat;
    }

    public void setEtat(Etat etat) {
        this.etat = etat;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public List<Apprenant> getApprenants() {
        return apprenants;
    }

    public void setApprenants(List<Apprenant> apprenants) {
        this.apprenants = apprenants;
    }

    public List<Brief> getBrief() {
        return brief;
    }

    public void setBrief(List<Brief> brief) {
        this.brief = brief;
    }

    public List<Ressource> getRessource() {
        return ressource;
    }

    public void setRessource(List<Ressource> ressource) {
        this.ressource = ressource;
    }

    public List<Matiere> getMatiere() {
        return matiere;
    }

    public void setMatiere(List<Matiere> matiere) {
        this.matiere = matiere;
    }
}
