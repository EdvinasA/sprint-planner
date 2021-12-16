package com.devbridge.sprintplanning.handlers;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

  @ExceptionHandler(value = {EntityNotFoundException.class})
  protected ResponseEntity<Object> handleConflictNotFound(
    RuntimeException ex, WebRequest request) {
    String bodyOfResponse = "Requested entity was not found";
    return handleExceptionInternal(ex, bodyOfResponse,
      new HttpHeaders(), HttpStatus.NOT_FOUND, request);
  }
}
