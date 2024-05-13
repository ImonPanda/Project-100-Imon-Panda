// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCnJfRRM9D6j14lyl7hp8yuy6OOELW-vO8",
    authDomain: "kwiter-b51a1.firebaseapp.com",
    databaseURL: "https://kwiter-b51a1-default-rtdb.firebaseio.com",
    projectId: "kwiter-b51a1",
    storageBucket: "kwiter-b51a1.appspot.com",
    messagingSenderId: "612133248919",
    appId: "1:612133248919:web:7f800c3d612c8d059a2ed2"
  };


// Initialize Firebase
 firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



