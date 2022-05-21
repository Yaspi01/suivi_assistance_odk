package com.odk.apisuiviapprenant.models.authers;

import com.odk.apisuiviapprenant.models.apprenantModel.Apprenant;

import javax.persistence.*;

@Entity
public class RessourseApprenant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String pdf;
    private String url;

    @ManyToOne
    private Apprenant apprenant;

    public RessourseApprenant() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPdf() {
        return pdf;
    }

    public void setPdf(String pdf) {
        this.pdf = pdf;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Apprenant getApprenant() {
        return apprenant;
    }

    public void setApprenant(Apprenant apprenant) {
        this.apprenant = apprenant;
    }
}
