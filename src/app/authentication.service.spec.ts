import { TestBed, inject } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});




