import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public adAuth: AngularFireAuth
  ) { }
  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) =>{
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then( userData => resolve(userData),
    err => reject (err));
    });
  }

  loginUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then( userData => resolve(userData),
          err => reject (err));
    });
  }

  getAuth() {
    return this.afAuth.authState.pipe(map (auth => auth));﻿
  }

  logout() {
    return this.adAuth.auth.signOut();
  }
}
