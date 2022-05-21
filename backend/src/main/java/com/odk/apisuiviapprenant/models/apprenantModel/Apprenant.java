package com.odk.apisuiviapprenant.models.apprenantModel;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.odk.apisuiviapprenant.Etat;
import com.odk.apisuiviapprenant.enums.Type;
import com.odk.apisuiviapprenant.models.authers.RessourseApprenant;
import com.odk.apisuiviapprenant.models.briefModel.Brief;
import com.odk.apisuiviapprenant.models.evaluationModel.Evaluation;
import com.odk.apisuiviapprenant.models.formateurModel.Formateur;
import com.odk.apisuiviapprenant.models.renduModel.Rendu;
import com.odk.apisuiviapprenant.models.ressourceModel.Ressource;

import javax.persistence.*;
import java.util.List;

@Entity
public class Apprenant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;

    private String prenom;

    private Etat etat;

    private Long telephone;

    private String email;

    private String login;

    private String motDePass;
    private String genre;

    private Type type;
    private boolean alreadyLogged = false;

    private boolean assister = false;
    private boolean supprimer = false;

    @ManyToOne
    private Formateur formateur;

    @JsonIgnore
    @OneToMany
    private List<Brief> brief;

    @JsonIgnore
    @OneToMany(mappedBy = "apprenant")
    private List<RessourseApprenant> ressourseApprenants;

    @JsonIgnore
    @OneToMany(mappedBy = "apprenant")
    private List<Ressource> ressource;

    @JsonIgnore
    @OneToMany(mappedBy = "apprenant")
    private List<Rendu> rendu;

    @JsonIgnore
    @OneToMany(mappedBy = "apprenant")
    private List<Evaluation> evaluation;

    public Apprenant() {
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

    public Etat getEtat() {
        return etat;
    }

    public void setEtat(Etat etat) {
        this.etat = etat;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public Long getTelephone() {
        return telephone;
    }

    public void setTelephone(Long telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public boolean isAssister() {
        return assister;
    }

    public void setAssister(boolean assister) {
        this.assister = assister;
    }

    public Formateur getFormateur() {
        return formateur;
    }

    public void setFormateur(Formateur formateur) {
        this.formateur = formateur;
    }

    public List<Brief> getBrief() {
        return brief;
    }

    public void setBrief(List<Brief> brief) {
        this.brief = brief;
    }

    public List<RessourseApprenant> getRessource() {
        return ressourseApprenants;
    }

    public void setRessourseApprenant(List<RessourseApprenant> ressourseApprenants) {
        this.ressourseApprenants = ressourseApprenants;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public void setRessource(List<Ressource> ressource) {
        this.ressource = ressource;
    }

    public List<RessourseApprenant> getRessourseApprenants() {
        return ressourseApprenants;
    }

    public void setRessourseApprenants(List<RessourseApprenant> ressourseApprenants) {
        this.ressourseApprenants = ressourseApprenants;
    }

    public List<Rendu> getRendu() {
        return rendu;
    }

    public void setRendu(List<Rendu> rendu) {
        this.rendu = rendu;
    }

    public List<Evaluation> getEvaluation() {
        return evaluation;
    }

    public void setEvaluation(List<Evaluation> evaluation) {
        this.evaluation = evaluation;
    }

    public boolean isSupprimer() {
        return supprimer;
    }

    public void setSupprimer(boolean supprimer) {
        this.supprimer = supprimer;
    }

    public boolean isAlreadyLogged() {
        return alreadyLogged;
    }

    public void setAlreadyLogged(boolean alreadyLogged) {
        this.alreadyLogged = alreadyLogged;
    }
}
