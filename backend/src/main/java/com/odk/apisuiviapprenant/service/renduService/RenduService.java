package com.odk.apisuiviapprenant.service.renduService;

import com.odk.apisuiviapprenant.models.renduModel.Rendu;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RenduService {

    Rendu addRendu(Rendu rendu);
    List<Rendu> allRendu();
    Rendu renduById(Long id);
    Rendu updateRendu(Rendu rendu, Long id);
    List<Rendu> renduByBrief(Long id);
    List<Rendu> renduByApprenant(Long id);
    void updateRenduNote(Rendu rendu, Long id);
}
