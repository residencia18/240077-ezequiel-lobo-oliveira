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

  buscarAtendimentoPorCpf(clienteCpf: string): Observable<Atendimento | null> {
    console.log('Buscando atendimento por CPF:', clienteCpf);
    return this.firestore.collection<Atendimento>(this.collectionName, ref => ref.where('clienteCpf', '==', clienteCpf))
      .valueChanges({ idField: 'id' })
      .pipe(
        map(atendimentos => {
          if (atendimentos.length > 0) {
            const atendimento = atendimentos[0];
            console.log('Atendimento encontrado:', atendimento);
            return atendimento;
          } else {
            console.log('Nenhum atendimento encontrado para o CPF fornecido.');
            return null;
          }
        })
      );
  }
  

  atualizarAtendimento(atendimento: Atendimento): Promise<void> {
    console.log('Atualizando atendimento:', atendimento);
    const { clienteCpf, ...atendimentoData } = atendimento; // Removendo clienteCpf da atualização
    return this.firestore.collection(this.collectionName, ref => ref.where('clienteCpf', '==', clienteCpf))
      .get()
      .toPromise()
      .then(querySnapshot => {
        if (querySnapshot && !querySnapshot.empty) {
          const docId = querySnapshot.docs[0].id;
          return this.firestore.doc(`${this.collectionName}/${docId}`).update(atendimentoData)
            .then(() => console.log('Atendimento atualizado com sucesso!'))
            .catch(error => console.error('Erro ao atualizar atendimento:', error));
        } else {
          console.error('Nenhum documento encontrado para o CPF fornecido.');
          throw new Error('Nenhum documento encontrado para o CPF fornecido.');
        }
      })
      .catch(error => {
        console.error('Erro ao buscar/atualizar atendimento:', error);
        throw error;
      });
  }
  
  

  cadastrarAtendimento(atendimento: Atendimento): Promise<string> {
    console.log('Cadastrando novo atendimento:', atendimento);
    return this.firestore.collection(this.collectionName).add(atendimento)
      .then(docRef => {
        console.log('Atendimento cadastrado com ID:', docRef.id);
        return docRef.id;
      })
      .catch(error => {
        console.error('Erro ao cadastrar atendimento:', error);
        throw error;
      });
  }

  listarAtendimentos(): Observable<Atendimento[]> {
    console.log('Listando atendimentos');
    return this.firestore.collection<Atendimento>(this.collectionName).snapshotChanges()
      .pipe(
        map(actions => {
          const atendimentos = actions.map(action => {
            const data = action.payload.doc.data() as Atendimento;
            const clienteCpf = data.clienteCpf; // Acessando o CPF do cliente a partir dos dados
            return { ...data, clienteCpf };
          });
          console.log('Atendimentos encontrados:', atendimentos);
          return atendimentos;
        })
      );
  }

  deletarAtendimentoPorCpf(clienteCpf: string): Promise<void> {
    return this.firestore.collection(this.collectionName, ref => ref.where('clienteCpf', '==', clienteCpf))
      .get()
      .toPromise()
      .then(querySnapshot => {
        if (querySnapshot) {
          querySnapshot.forEach(doc => {
            doc.ref.delete();
          });
        } else {
          console.error('Nenhum documento encontrado para o CPF fornecido.');
        }
      })
      .catch(error => {
        console.error('Erro ao excluir atendimento:', error);
      });
  }
  
  
  
}
