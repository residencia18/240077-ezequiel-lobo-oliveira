import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { ManejoSanitario } from '../models/manejo-sanitario.model';

@Injectable({
  providedIn: 'root'
})
export class ManejoSanitarioService {
  private manejoRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.manejoRef = db.list('/manejoSanitario');
  }

  getHistoricoManejos(): Observable<ManejoSanitario[]> {
    return this.manejoRef.valueChanges() as Observable<ManejoSanitario[]>;
  }

  atualizarAtividades(manejoId: string, atividadesRealizadas: any): Promise<void> {
    return this.manejoRef.update(`${manejoId}/atividadesRealizadas`, atividadesRealizadas);
  }
}
