package com.odk.apisuiviapprenant.service.briefService;

import com.odk.apisuiviapprenant.enums.Status;
import com.odk.apisuiviapprenant.models.briefModel.Brief;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public interface BriefService {

    Brief addBrief(Brief brief, MultipartFile file) throws IOException;
    List<Brief> allBrief();
    Brief briefById(Long id);
    List<Brief> findBriefByApprenant(Long id);
    List<Brief> findBriefByFormateur(Long id);
    byte[] getPhoto(Long id) throws IOException;
    Brief updateBrief(Brief brief, Long id);
    Brief updateVusBrief(Brief brief, Long id);
    List<Brief> briefByVusAndStatus(boolean vus, Status status);
    Brief updateBriefStatus(Brief brief, Long id);
    List<Brief> briefByApprenantAndStatus(Status status);

}
