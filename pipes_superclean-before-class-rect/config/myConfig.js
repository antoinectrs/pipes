 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAgcuMh43xL6yQ7ZYMSHv4AUW5DSrJPRHo",
    authDomain: "pipes-fdba3.firebaseapp.com",
    databaseURL: "https://pipes-fdba3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pipes-fdba3",
    storageBucket: "pipes-fdba3.appspot.com",
    messagingSenderId: "275641495840",
    appId: "1:275641495840:web:5f6bffe772792fd74c2745",
    measurementId: "G-YZW6CPMV82"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
   // NE PAS OUBLIER DE CONFIGURER FIREBASE AUTH TO ANONYMOUS !!!
   
   // SIGN ANONYMOUS USER ----
   firebase.auth().onAuthStateChanged((user) => {
     console.log("onAuthStateChanged");
     if (user) {
       console.log(user);
       // User is signed in.
       let isAnonymous = user.isAnonymous;
       let uid = user.uid;
       // console.log(uid);
     } else {
       // No user is signed in.
     }
   });
   
   firebase
     .auth()
     .signInAnonymously()
     .catch((error) => {
       // Handle Errors here.
       let errorCode = error.code;
       let errorMessage = error.message;
       console.log("anonymously auth error ----- " + errorCode);
       console.log(errorCode);
     });
   
   DATABASE = firebase.database();
   
   function SEND_MESSAGE(_type, _data = "yes") {
  //  _data = {'data': _data, 't_created': Date.now()};
  //  _data = {'data': _data, 'level': 0};
     DATABASE.ref(_type).set(_data);
    //  console.log( DATABASE)
   }