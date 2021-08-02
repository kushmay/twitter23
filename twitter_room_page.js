var firebaseConfig = {
  apiKey: "AIzaSyCCyCYnNKwOYgh0JcfAvD6q4xRAo8pOOK4",
  authDomain: "twitter-e4f3b.firebaseapp.com",
  projectId: "twitter-e4f3b",
  storageBucket: "twitter-e4f3b.appspot.com",
  messagingSenderId: "113584888955",
  appId: "1:113584888955:web:2bdb0d5e48a6c9cbb7d6de",
  measurementId: "G-YM11VTHRFV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
});});}
getData();

function AddRoom()
{
     room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
     });
localStorage.setItem("room_name",room_name);
window.location="twitter_room_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="twitter_room_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}