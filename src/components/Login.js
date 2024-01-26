import React, { useRef, useState } from "react";
import Header from "./Header";
import { BACKGROUND_IMG_URL } from "../utils/constants";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import Fotter from "./Fotter";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [alertMessage, setAlertMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleClickValidation = () => {
    const message = validateData(
      email.current?.value,
      password.current?.value,
      name.current?.value
    );
    setAlertMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setAlertMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAlertMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAlertMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInHandler = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />

      <div>
        <img src={BACKGROUND_IMG_URL} alt="bg-img" className="absolute" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-3/12 mx-auto left-0 right-0 p-12 mt-36 text-white rounded-lg opacity-80"
      >
        <h1 className="font-bold text-4xl p-2 m-2 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full  rounded-lg bg-gray-800 "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-3  w-full rounded-lg  bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full  rounded-lg bg-gray-800 "
        />
        <p className="font-bold text-red-700 text-xl">{alertMessage}</p>
        <button
          className="bg-red-700 p-4 my-5 w-full rounded-lg "
          onClick={handleClickValidation}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInHandler}>
          {isSignInForm
            ? " New to Netflix? Sign Up Now"
            : "Already member? Sign In Now"}
        </p>
      </form>

      <div>
        <Fotter />
      </div>
    </div>
  );
};

export default Login;
