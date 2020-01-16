import { Client } from './../models/client';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private afs: AngularFirestore) { }

  getClients() {
    return this.afs.collection('clients').valueChanges();
  }

  persistClient(data: Client) {
    return this.afs.collection('clients').add(data);
  }
}
