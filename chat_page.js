//YOUR FIREBASE LINKS
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBuKm61ejHlRr1OiA1RR0XNeU-rXcRWcRo",
    authDomain: "classtest-6aee6.firebaseapp.com",
    databaseURL: "https://classtest-6aee6-default-rtdb.firebaseio.com",
    projectId: "classtest-6aee6",
    storageBucket: "classtest-6aee6.appspot.com",
    messagingSenderId: "165934833263",
    appId: "1:165934833263:web:b030fec29bd3928d06779a",
    measurementId: "G-8SX6FV20W6"
  };
  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  
  
  



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;


//Start code

//End code
 } });  }); }
getData();

function send()
{

    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";

}
