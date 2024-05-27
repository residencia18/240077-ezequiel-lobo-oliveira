import { Injectable, signal } from '@angular/core';
import { CartService } from './cart.service';
import { Item } from '../interfaces/Item';
import { CartItem } from '../interfaces/CartItem';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  public readonly items = [
    {
      id: 1,
      name: 'O poder do hábito: Por que fazemos o que fazemos na vida e nos negócios',
      inStock: true,
      price: 55,
      imageURL: 'https://m.media-amazon.com/images/I/815iPX0SgkL._SY425_.jpg',
      properties: {
        color: 'Autoajuda',
        capacity: '320 páginas',
        style: 'Capa dura',
      }
    },
    {
      id: 2,
      name: 'O livro que você gostaria que seus pais tivessem lido: (e seus filhos ficarão gratos por você ler)',
      inStock: true,
      price: 45.00,
      imageURL: 'https://m.media-amazon.com/images/I/71BROqAwZtL._SY425_.jpg',
      properties: {
        color: 'Psicologia',
        capacity: '158 páginas',
        style: 'Capa comum',
      }
    },
    {
      id: 3,
      name: 'Os sete maridos de Evelyn Hugo ',
      inStock: true,
      price: 60.00,
      imageURL: 'https://m.media-amazon.com/images/I/91yEPgRcELL._SY425_.jpg',
      properties: {
        color: 'Ficção',
        capacity: '230 páginas',
        style: 'Capa comum',
      }
    },
    {
      id: 4,
      name: 'Mindset: A nova psicologia do sucesso',
      inStock: true,
      price: 45.90,
      imageURL: 'https://m.media-amazon.com/images/I/71Ils+Co9fL._SL1500_.jpg',
      properties: {
        color: '',
        capacity: '200 páginas',
        style: 'Capa dura',
      }
    },
    {
      id: 5,
      name: 'O homem mais rico da Babilônia',
      inStock: true,
      price: 37.70,
      imageURL: 'https://m.media-amazon.com/images/I/81ehX6Quw2L._SY425_.jpg',
      properties: {
        color: 'Autoajuda',
        capacity: '120 páginas',
        style: 'Capa dura',
      }
    },
    {
      id: 6,
      name: 'Talvez você deva conversar com alguém: Uma terapeuta, o terapeuta dela e a vida de todos nós',
      inStock: true,
      price: 40.00,
      imageURL: 'https://m.media-amazon.com/images/I/81E-X4rpSdL._SL1500_.jpg',
      properties: {
        color: 'Autoajuda',
        capacity: '175 páginas',
        style: 'Capa comum',
      }
    },
  ];

  constructor(private cartService: CartService) { }

  public addToCart(item: Item) {
    const _item: CartItem = { ...item, quantity: 1, gift: false };
    this.cartService.addItem(_item);
  }
}
