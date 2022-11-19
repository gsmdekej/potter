var firebaseConfig = {
    apiKey: "AIzaSyAEEo1MfwG7k0Rs6YeSxXPh2isbjIs3ES0",
    authDomain: "let-s-chat-ba9cb.firebaseapp.com",
    databaseURL: "https://let-s-chat-ba9cb-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-ba9cb",
    storageBucket: "let-s-chat-ba9cb.appspot.com",
    messagingSenderId: "629433109289",
    appId: "1:629433109289:web:7801e0fa8daf55a4594538"
  };
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom()
{
   room_name = document.getElementById("room_name").value;

   firebase.datebase().ref("/").child(room_name).update({
       purpose : "adding room name"  
   });

   localStorage.setItem("room_name" , room_name);

   window.location = "chat_room.html";
}

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
   });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location="chat_room.html";
}
