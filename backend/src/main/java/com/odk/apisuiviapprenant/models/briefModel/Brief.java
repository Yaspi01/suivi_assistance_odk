package com.odk.apisuiviapprenant.models.briefModel;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.odk.apisuiviapprenant.enums.Status;
import com.odk.apisuiviapprenant.models.apprenantModel.Apprenant;
import com.odk.apisuiviapprenant.models.evaluationModel.Evaluation;
import com.odk.apisuiviapprenant.models.formateurModel.Formateur;
import com.odk.apisuiviapprenant.models.renduModel.Rendu;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Brief {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;

    private LocalDate date = LocalDate.now();
    private LocalDate dateRendu;

    private String photo;

    private String description;
    private Status status = Status.NonFait;
    private boolean vus = false;

    @ManyToOne
    private Formateur formateur;

    @OneToOne
    private Apprenant apprenant;

    @OneToMany(mappedBy = "brief")
    @JsonIgnore
    private List<Rendu> rendu;

    @ManyToOne
    private Evaluation evaluation;

    public Brief() {
    }

    public Apprenant getApprenant() {
        return apprenant;
    }

    public void setApprenant(Apprenant apprenant) {
        this.apprenant = apprenant;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDateRendu() {
        return dateRendu;
    }

    public void setDateRendu(LocalDate dateRendu) {
        this.dateRendu = dateRendu;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public boolean isVus() {
        return vus;
    }

    public void setVus(boolean vus) {
        this.vus = vus;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }


    public Formateur getFormateur() {
        return formateur;
    }

    public void setFormateur(Formateur formateur) {
        this.formateur = formateur;
    }

    public List<Rendu> getRendu() {
        return rendu;
    }

    public void setRendu(List<Rendu> rendu) {
        this.rendu = rendu;
    }

    public Evaluation getEvaluation() {
        return evaluation;
    }

    public void setEvaluation(Evaluation evaluation) {
        this.evaluation = evaluation;
    }
}
