import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCgTMuKXGstUE00xsC5lZrmHCUPZfucgsU",
  authDomain: "rika-1st-performance.firebaseapp.com",
  projectId: "rika-1st-performance",
  storageBucket: "rika-1st-performance.appspot.com",
  messagingSenderId: "960374149223",
  appId: "1:960374149223:web:b0f2d734d0c78496dfc4c2",
  measurementId: "G-F1S3MXFXQ4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };