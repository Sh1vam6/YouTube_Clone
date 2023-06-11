import  firebase from "firebase/compat/app"


import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAzA6AqbQRyn4tq-Jo8cO1FJ1vcbCrj9Nc",
    authDomain: "clone-38fef.firebaseapp.com",
    projectId: "clone-38fef",
    storageBucket: "clone-38fef.appspot.com",
    messagingSenderId: "1095333943958",
    appId: "1:1095333943958:web:8ba5e1deb63487b9a280b7"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()