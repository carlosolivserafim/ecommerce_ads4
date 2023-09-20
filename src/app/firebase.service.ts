import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  constructor(
    public db: AngularFireDatabase
  ) { }

  ref() {
    return this.db.database.ref('/');
  }
}
