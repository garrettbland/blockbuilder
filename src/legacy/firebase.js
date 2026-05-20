/**
 * Import Fireabase and Firebase Analytics
 */
import firebase from 'firebase'
import 'firebase/analytics'

/**
 * Firebase config
 */
const firebaseConfig = {
    apiKey: 'AIzaSyB_lJ8CkXV_jwofixx5qIeCSNyBs7UIzzk',
    authDomain: 'block-builder-b6586.firebaseapp.com',
    projectId: 'block-builder-b6586',
    storageBucket: 'block-builder-b6586.appspot.com',
    messagingSenderId: '992450590536',
    appId: '1:992450590536:web:572a3d5af3e7ab3807257d',
    measurementId: 'G-R6DF45XSKT',
}

/**
 * Check that 'window' is in scope for the analytics module
 */
if (typeof window !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
    firebase.analytics()
}

export default firebase
