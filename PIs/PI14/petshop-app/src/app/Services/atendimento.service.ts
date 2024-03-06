import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Atendimento } from '../Models/atendimento.model';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {
  private collectionName = 'atendimentos';

  constructor(private firestore: AngularFirestore) {}

  buscarAtendimentoPorId(id: string): Observable<Atendimento | null> {
    return this.firestore.doc<Atendimento>(`${this.collectionName}/${id}`).valueChanges()
      .pipe(
        map(atendimento => atendimento || null)
      );
  }

  atualizarAtendimento(atendimento: Atendimento): Promise<void> {
    const { clienteCpf, ...atendimentoData } = atendimento; // Removendo clienteCpf da atualização
    return this.firestore.doc(`${this.collectionName}/${clienteCpf}`).update(atendimentoData);
  }

  cadastrarAtendimento(atendimento: Atendimento): Promise<string> {
    return this.firestore.collection(this.collectionName).add(atendimento)
      .then(docRef => docRef.id);
  }

  listarAtendimentos(): Observable<Atendimento[]> {
    return this.firestore.collection<Atendimento>(this.collectionName).snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const data = action.payload.doc.data() as Atendimento;
            const clienteCpf = action.payload.doc.id;
            return { ...data, clienteCpf };
          });
        })
      );
  }
}
