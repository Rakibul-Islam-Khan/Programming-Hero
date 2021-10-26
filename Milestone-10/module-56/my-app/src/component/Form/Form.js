import React, { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import initializeAuth from "../../FireBase/firebase.init";
initializeAuth();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Form = () => {
  const [logIn, setLogIn] = useState({});
  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { displayName, photoURL, email } = result.user;
        const user = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setLogIn(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        console.log(errorCode, errorMessage, email);
      });
  };
  const handleGithubSignIn = () => {
    const gitAuth = getAuth();
    signInWithPopup(gitAuth, githubProvider).then((result) => {
        const { displayName, photoURL, email } = result.user;
        const user = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setLogIn(user);

    });
  };
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setLogIn({});
    });
  };
  return (
    <div>
      {!logIn.name ? (
        <div>
          <button onClick={handleGoogleSignIn}>Google</button>
          <button onClick={handleGithubSignIn}>Github</button>
        </div>
      ) : (
        <button onClick={handleSignOut}>singOut</button>
      )}
      <br />
      {logIn?.name && (
        <div>
          <h3>Welcome {logIn.name}</h3>
          <h3>Your email {logIn.email}</h3>
          <img src={logIn.photo} alt="" />
        </div>
      )}
    </div>
  );
};

export default Form;
