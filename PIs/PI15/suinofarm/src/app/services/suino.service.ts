import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { HistoricoPeso } from '../models/peso.model'; 
import { Suino } from '../models/suino.model';

@Injectable({
  providedIn: 'root'
})
export class SuinoService {
  private suinosRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.suinosRef = db.list('/suinos');
  }

  getSuinos(): Observable<Suino[]> {
    return this.suinosRef.valueChanges() as Observable<Suino[]>;
  }

  addSuino(suino: Suino): Promise<any> {
    return this.suinosRef.push(suino).then((ref: firebase.default.database.Reference) => {
      return Promise.resolve(ref.key);
    });
  }

  updateSuino(key: string, suino: Suino): Promise<void> {
    const suinoRef = this.db.object(`/suinos/${key}`);
    return suinoRef.update(suino);
  }

  deleteSuino(key: string): Promise<void> {
    const suinoRef = this.db.object(`/suinos/${key}`);
    return suinoRef.remove();
  }

  cadastrarPeso(numeroBrinco: string, dataPesagem: Date, peso: number): Promise<any> {
    return this.db.list(`/pesos/${numeroBrinco}`).push({ dataPesagem, peso }).then((ref: firebase.default.database.Reference) => {
      return Promise.resolve(ref.key);
    });
  }

  getPeso(numeroBrinco: string): Observable<HistoricoPeso[]> { // Alterado de 'Peso' para 'HistoricoPeso'
    return this.db.list(`/pesos/${numeroBrinco}`).valueChanges() as Observable<HistoricoPeso[]>; // Alterado de 'Peso' para 'HistoricoPeso'
  }

  atualizarPeso(numeroBrinco: string, pesoId: string, dataPesagem: Date, peso: number): Promise<void> {
    const pesoRef: AngularFireObject<any> = this.db.object(`/pesos/${numeroBrinco}/${pesoId}`);
    return pesoRef.update({ dataPesagem, peso });
  }
}
