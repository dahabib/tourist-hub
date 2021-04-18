import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import firebase from "firebase/app";
import firebaseConfig from'./firebase.config';
import "firebase/auth";
import "firebase/firestore";
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import loginImage from '../../../images/login.jpg';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
  
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  
    const handleGoogleSignIn = () => {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function (result) {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = { name: displayName, email, photo: photoURL }
        setLoggedInUser(signedInUser);
        storeAuthToken();
      }).catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    }
  
    const storeAuthToken = () => {
      firebase.auth().currentUser.getIdToken(true)
        .then(function (idToken) {
          sessionStorage.setItem('token', idToken);
          history.replace(from);
        }).catch(function (error) {
          console.log(error);
        });
    }


    return (
        <section class="min-h-screen flex items-stretch text-white ">
            <div class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{backgroundImage: `url(${loginImage})`}}>
                <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
                <div class="w-full px-24 z-10">
                    <h1 class="text-5xl font-bold text-left tracking-wide">Keep it special</h1>
                    <p class="text-3xl my-4">Capture your personal memory in unique way, anywhere.</p>
                </div>
                <div class="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
                    <span>
                    <p>001</p>
                    </span>
                    <span>
                        <p>First</p>
                    </span>
                    <span>
                    <p>Another</p>
                    </span>
                </div>
            </div>
            <div class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
                <div class="absolute lg:hidden z-10 inset-0 bg-black bg-no-repeat bg-cover items-center">
                    <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
                </div>
                <div class="w-full py-6 z-20 text-black">
                    <h1 class="my-6">
                    <p>Google</p>
                    </h1>
                    <div class="py-6 space-x-2">
                        <button class="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-blue-600"></button>
                        <button onClick={handleGoogleSignIn} class="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-red-500">G</button>
                        <button class="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-blue-800"></button>
                    </div>
                    <p class="text-gray-500">
                        or use email your account
                </p>
                    <form action="" class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                        <div class="pb-2 pt-4">
                            <input type="email" name="email" id="email" placeholder="Email" class="block w-full p-4 text-lg rounded-sm bg-black" />
                        </div>
                        <div class="pb-2 pt-4">
                            <input class="block w-full p-4 text-lg rounded-sm bg-black" type="password" name="password" id="password" placeholder="Password" />
                        </div>
                        <div class="text-right text-gray-400 hover:underline hover:text-gray-100">
                            <Link to='/'>Forgot your password?</Link>
                        </div>
                        <div class="px-4 pb-2 pt-4">
                            <button class="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">sign in</button>
                        </div>

                        <div class="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden ">
                            <Link to='/'>
                            <p>1</p>
                            </Link>
                            <Link to='/'>
                            <p>2</p>
                            </Link>
                            <Link to='/'>
                                <p>3</p>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;