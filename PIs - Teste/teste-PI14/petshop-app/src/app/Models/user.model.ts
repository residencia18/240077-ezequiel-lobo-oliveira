export class User {
    email: string;
    password: string = ''; // Definindo um valor padrão na declaração da propriedade
  
    constructor(email: string, password: string) {
      this.email = email;
      this.password = password;
    }
  }
  