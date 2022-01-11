import * as firebase from 'firebase';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCqbZJlifg-tsApVnGqes7DJIVRAybmiyI',
  authDomain: 'bilingua-brasil-8aa47.firebaseapp.com',
  databaseURL: 'https://bilingua-brasil-8aa47.firebaseio.com',
  projectId: 'bilingua-brasil-8aa47',
  storageBucket: 'bilingua-brasil-8aa47.appspot.com',
  messagingSenderId: '997575620609',
  appId: '1:997575620609:web:28d0d0ff8bbdf6a6932800',
  measurementId: 'G-WZ9S534ZKS',
};

firebase.default.initializeApp(firebaseConfig);

export const auth = firebase.default.auth();
export const database = firebase.default.database();
