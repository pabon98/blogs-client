import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import initializeAuthentication from "../Components/Firebase/Firebase.init";
import { addUser } from "../Components/Redux/Reducer/Reducer";

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const dispatch = useDispatch();

    const auth = getAuth();
    const signUpWithEmailPassword = ({ name, email, password }) => {
        console.log(email, password);
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                setError('');
                
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    setUser({ name, email })
                    dispatch(addUser({ name, email }))
                    setError('')
                }).catch((error) => {
                    setError(error.message)
                });
               
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }

    const loginWithEmailPassword = ({ email, password }) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setError('')
                dispatch(addUser({ name: user.displayName, email }))
                setUser({ name: user.displayName, email })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
                dispatch(addUser({}))
            }).catch((error) => {
                // An error happened.
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                dispatch(addUser(user))
                setIsLoading(false)
            } else {
                setUser({})
                dispatch(addUser({}))
                setIsLoading(false)
            }
        });
    }, [])
    return {
        signUpWithEmailPassword,
        loginWithEmailPassword,
        user,
        logOut,
        isLoading,
        error
    };
};

export default useFirebase;