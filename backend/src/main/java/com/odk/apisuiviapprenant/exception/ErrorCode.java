package com.odk.apisuiviapprenant.exception;

public enum ErrorCode {
    APPRENANT_NOT_FOUND(1000),
    APPRENANT_NOT_VALID(1001),
    APPRENANT_ALREADY_EXISTE(1002),
    APPRENANT_AUTHENTIFICATION_INVALID(1003),
    APPRENANT_DESACTIVE_ACCOUNT(1004),
    FORMATEUR_NOTE_FOUND(2000),
    FORMATEUR_AUTHENTIFICATION_INVALID(2001),
    FORMATEUR_DESACTIVE_ACCOUNT(2002)
    ;

    private int code;
    ErrorCode(int code) {
        this.code = code;
    }

    public int getCode() {
        return code;
    }
}
