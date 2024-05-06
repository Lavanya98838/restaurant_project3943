const firebaseConfig = {
    apiKey: "AIzaSyBjoBUP3jBm7xqDyhrlzktHe5Ap4q9xdck",
    authDomain: "bookingpage-e8d0f.firebaseapp.com",
    databaseURL: "https://bookingpage-e8d0f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bookingpage-e8d0f",
    storageBucket: "bookingpage-e8d0f.appspot.com",
    messagingSenderId: "282936482055",
    appId: "1:282936482055:web:9bd51da6a4866cb2598da2",
    measurementId: "G-SEN533S304"
  };

 firebase.initializeApp(firebaseConfig);

var restaurantPageRef = firebase.database().ref("bookingpage");

document.getElementById("bookingForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var mobile = getElementVal("mobile");
    var people = getElementVal("people");
    console.log(name, email, mobile, people);
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};