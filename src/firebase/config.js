import '@firebase/auth';
import '@firebase/firestore';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyBzVLk34jI_ZPgrpXga3qx94KJPSvdtxfY',
    authDomain: '',
    databaseUrl: '',
    projectId: 'to-do-app-84926',
    storageBucket: '',
    messagingSenderId: '1019013389546',
    appId: '1:1019013389546:android:a74108831265c587fbcb93'
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
