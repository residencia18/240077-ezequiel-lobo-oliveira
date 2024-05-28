import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations()]
};

const firebaseConfig = {
  apiKey: "AIzaSyDREP7cKTlXDyUeXoE25zFtXyDUZla2CDM",
  authDomain: "fir-86f08.firebaseapp.com",
  databaseURL: "https://fir-86f08-default-rtdb.firebaseio.com",
  projectId: "fir-86f08",
  storageBucket: "fir-86f08.appspot.com",
  messagingSenderId: "53684622438",
  appId: "1:53684622438:web:5293ac92c79595d3e0c9a7",
  measurementId: "G-6SJ4QL79KL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
