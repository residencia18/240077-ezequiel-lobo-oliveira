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

  updateSuino(suino: Suino): Promise<void> {
    // Encontrar o suíno com base no número do brinco
    return new Promise<void>((resolve, reject) => {
        this.db.list('/suinos', ref => ref.orderByChild('brinco').equalTo(suino.brinco).limitToFirst(1)).snapshotChanges().subscribe(snapshots => {
            if (snapshots.length > 0) {
                const key = snapshots[0].payload.key;
                this.db.object(`/suinos/${key}`).update(suino)
                    .then(() => {
                        console.log('Suíno atualizado com sucesso.');
                        resolve();
                    })
                    .catch(error => {
                        console.error('Erro ao atualizar suíno:', error);
                        reject(error);
                    });
            } else {
                console.error('Suíno não encontrado.');
                reject('Suíno não encontrado.');
            }
        }, error => {
            console.error('Erro ao buscar suíno:', error);
            reject(error);
        });
    });
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

  
  excluirSuino(suino: Suino): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.db.list('/suinos', ref => ref.orderByChild('brinco').equalTo(suino.brinco).limitToFirst(1)).snapshotChanges().subscribe(snapshots => {
        const key = snapshots[0].key;
        if (key) {
          this.db.object(`/suinos/${key}`).remove()
            .then(() => {
              console.log('Suíno excluído com sucesso.');
              resolve();
            })
            .catch(error => {
              console.error('Erro ao excluir suíno:', error);
              reject(error);
            });
        } else {
          console.error('Suíno não encontrado.');
          reject('Suíno não encontrado.');
        }
      }, error => {
        console.error('Erro ao buscar suíno:', error);
        reject(error);
      });
    });
  }
}

