import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { ManejoSanitario } from '../models/manejo-sanitario.model'; // Importe o modelo de manejo sanitário
import { Suino } from '../models/suino.model';
import { HistoricoPeso } from '../models/peso.model';

@Injectable({
  providedIn: 'root'
})
export class SuinoService {
  private suinosRef: AngularFireList<any>;
  private manejoRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.suinosRef = db.list('/suinos');
    this.manejoRef = db.list('/manejoSanitario');
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

  getPeso(numeroBrinco: string): Observable<HistoricoPeso[]> {
    return this.db.list(`/pesos/${numeroBrinco}`).valueChanges() as Observable<HistoricoPeso[]>;
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

  cadastrarManejo(manejo: ManejoSanitario): Promise<any> {
    // Adiciona o manejo sanitário à lista de manejo no Firebase
    return new Promise<any>((resolve, reject) => {
        this.manejoRef.push(manejo).then((ref: firebase.default.database.Reference) => {
            const id = ref.key; // Recupera o ID gerado pelo Firebase
            if (id) {
                // Atualiza o campo 'id' do objeto ManejoSanitario com o ID gerado
                this.manejoRef.update(id, { id }).then(() => {
                    resolve(id); // Resolve a promise com o ID
                }).catch(error => {
                    reject(error); // Rejeita a promise em caso de erro na atualização
                });
            } else {
                reject('ID não disponível'); // Rejeita a promise se o ID não estiver disponível
            }
        }).catch(error => {
            console.error('Erro ao cadastrar manejo sanitário:', error);
            reject(error); // Rejeita a promise em caso de erro ao adicionar o manejo sanitário
        });
    });
}

}
