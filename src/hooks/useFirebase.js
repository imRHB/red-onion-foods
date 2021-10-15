import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import initializeAuthentication from "../Firebase/firebase.init"

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
            })
    }

    return {
        signInWithGoogle
    }
}

export default useFirebase;