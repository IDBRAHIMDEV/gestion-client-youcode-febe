import { DataAccount } from './../models/data-account';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  register(data: DataAccount) {
    return this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password);
  }

  userAuthenticated() {
    return this.afAuth.user;
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  login(data: DataAccount) {
    return this.afAuth.auth.signInWithEmailAndPassword(data.email, data.password)
  }
}
