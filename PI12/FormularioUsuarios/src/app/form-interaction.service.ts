import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormInteractionService {
  private events: any[] = [];

  constructor() {}

  addEvent(eventData: any) {
    this.events.push(eventData);
  }

  clearEvents() {
    this.events = [];
  }

  getEvents() {
    return this.events;
  }
}
