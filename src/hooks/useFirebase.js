import { getAuth, updateProfile, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../Firebase/firebase.init";


// Code for useFirebase
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth();
    // clear error
    useEffect(() => {
        setTimeout(() => {
            setError("");
        }, 5000);
    }, [error]);

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)

    }
    // Email sign in
    function signInWithEmail(e) {
        e.preventDefault();
        return signInWithEmailAndPassword(auth, email, password);
    }
    // set name and profile image url
    function setNameFunction() {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then(() => { })
            .finally(() => setIsLoading(false));

    }
    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    // Log Out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then((res) => {
                setUser({});
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // sign up with email password
    function singUp(e) {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setNameFunction();
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }
    // get name
    function getName(e) {
        setName(e?.target?.value);
    }

    // get Email
    function getEmail(e) {
        setEmail(e?.target?.value);
    }
    // Get password
    function getPassword(e) {
        setPassword(e?.target?.value);
    }

    return {
        user,
        setUser,
        error,
        setError,
        isLoading,
        setIsLoading,
        signInUsingGoogle,
        logOut,
        getEmail,
        getName,
        getPassword,
        singUp,
        signInWithEmail
    }
}

export default useFirebase;