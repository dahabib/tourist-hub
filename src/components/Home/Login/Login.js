import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import firebase from "firebase/app";
import firebaseConfig from './firebase.config';
import "firebase/auth";
import "firebase/firestore";
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import loginImage from '../../../images/login.jpg';
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

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
            storeUser(result.user);
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

    const storeUser = data => {
        const userInfo = {
            name: data.displayName,
            email: data.email,
            image: data.photoURL,
            role: 'user',
            createdOn: new Date()
        }

        fetch(`https://tourist-hub.herokuapp.com/user?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                const userCount = data.length;
                console.log(userCount);

                if (userCount === 0) {
                    fetch('https://tourist-hub.herokuapp.com/addUser', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(userInfo),
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log('User added successfully');
                        })
                        .catch(error => {
                            console.error(error)
                        })
                }
            })
    }

    return (
        <section class="min-h-screen flex items-stretch text-white ">
            <div class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{ backgroundImage: `url(${loginImage})` }}>
                <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
                <div class="w-full px-24 z-10">
                    <h1 class="text-5xl font-bold text-left tracking-wide">Keep it special</h1>
                    <p class="text-3xl my-4">Capture your personal memory in unique way, anywhere.</p>
                </div>
                <div class="bottom-2 absolute p-8 m-4 text-center right-0 left-0 flex justify-center space-x-8">
                    <span className="h-10 w-10">
                        <a href="http://facebook.com" target="_blank" rel="noreferrer" className="text-facebook">
                            <FaFacebook className="w-full h-full rounded-full hover:text-white"/>
                        </a>
                    </span>
                    <span className="h-10 w-10">
                        <a href="http://linkedin.com" target="_blank" rel="noreferrer" className="text-linkedin">
                            <FaLinkedin className="w-full h-full rounded-full hover:text-white" />
                        </a>
                    </span>
                    <span className="h-10 w-10">
                        <a href="http://instagram.com" target="_blank" rel="noreferrer" className="text-instagram">
                            <FaInstagram className="w-full h-full rounded-full hover:text-white" />
                        </a>
                    </span>
                </div>
            </div>
            <div class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
                <div class="absolute lg:hidden z-10 inset-0 bg-black bg-no-repeat bg-cover items-center">
                    <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
                </div>
                <div class="w-full py-6 z-20 text-black">
                    <h1 class="my-6">
                        <p>Sign in using</p>
                    </h1>
                    <div class="py-6 space-x-4">
                        <FcGoogle onClick={handleGoogleSignIn} class="w-10 h-10 items-center justify-center inline-flex rounded-full cursor-pointer" />
                        <FaFacebook class="w-10 h-10 items-center justify-center inline-flex rounded-full cursor-pointer text-facebook" />
                        <FaLinkedin class="w-10 h-10 items-center justify-center inline-flex rounded-full cursor-pointer text-linkedin" />
                    </div>
                    <p class="text-gray-500 text-2xl">
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
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;