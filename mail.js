 const firebaseConfig = {
    apiKey: "AIzaSyD8W_biFADEEsIfBl6_xktiYZxlBCPuaj0",
    authDomain: "ftrackerform.firebaseapp.com",
    databaseURL: "https://ftrackerform-default-rtdb.firebaseio.com",
    projectId: "ftrackerform",
    storageBucket: "ftrackerform.appspot.com",
    messagingSenderId: "839082028704",
    appId: "1:839082028704:web:8796afdf5728c0d81523c5"
  };
firebase.initializeApp(firebaseConfig);
const ftrackerDB = firebase.database().ref("ftracker");
document.getElementbyID('ftracker').addEventListner("submit",submitForm);
function submitForm(e){
       e.preventDefault();
       var username = getElementVal("username");
       var password = getElementVal("password");
console.log(username,password);
saveMessages(username,password);
}

const saveMessages = (username,password) => {
         var newftracker = ftrackerDB.push();
       
         newftracker.set({
              username : username,
              password : password
});

const getElementVal = (id) => {
        return document.getElementById(id).value


