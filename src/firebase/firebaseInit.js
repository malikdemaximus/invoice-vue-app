import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCYs1H6Zhsspo7asMU90sZHXT97rTVg5Dg',
  authDomain: 'invoice-app-yt-6c064.firebaseapp.com',
  projectId: 'invoice-app-yt-6c064',
  storageBucket: 'invoice-app-yt-6c064.appspot.com',
  messagingSenderId: '704111875349',
  appId: '1:704111875349:web:e1a445b8d1c5fce691c51c',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
