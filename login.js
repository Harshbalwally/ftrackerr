
// Check if Firebase app has already been initialized
if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

// Your other JavaScript code goes here
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");

const signup = () => {
  window.location.assign("register.html");
  console.log("Sign Up clicked");
};

const login = () => {
  if (email.value === "") {
    message.innerHTML = "Email required!";
    message.style.color = "red";
  } else if (password.value === "") {
    message.innerHTML = "Password required!";
    message.style.color = "red";
  } else {
    const userData = {
      email: email.value,
      password: password.value,
    };
    firebase
      .auth()
      .signInWithEmailAndPassword(userData.email, userData.password)
      .then((userCredential) => {
        message.innerHTML = "Successfully login";
        message.style.color = "green";
        if (userCredential.user.emailVerified) {
          window.location.assign("home.html");
        } else {
          window.location.assign("emailVerification.html");
        }
      })
      .catch((error) => {
        message.innerHTML = error.message;
      });
  }
};

const forgotpassword = () => {
  window.location.assign("ForgotPassword.html");
};
