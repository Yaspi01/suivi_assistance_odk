package com.odk.apisuiviapprenant.handlerErrors;

import com.odk.apisuiviapprenant.exception.ErrorCode;
import lombok.Builder;

import java.util.ArrayList;
import java.util.List;

@Builder
public class Error {

    private Integer httpCode;
    private ErrorCode errorCode;
    private String message;
    private List<String> errors = new ArrayList<>();

    public Error(Integer httpCode, ErrorCode errorCode, String message, List<String> errors) {
        this.httpCode = httpCode;
        this.errorCode = errorCode;
        this.message = message;
        this.errors = errors;
    }
    public Error() {
    }

    public Integer getHttpCode() {
        return httpCode;
    }

    public void setHttpCode(Integer httpCode) {
        this.httpCode = httpCode;
    }

    public ErrorCode getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(ErrorCode errorCode) {
        this.errorCode = errorCode;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public List<String> getErrors() {
        return errors;
    }

    public void setErrors(List<String> errors) {
        this.errors = errors;
    }
}
