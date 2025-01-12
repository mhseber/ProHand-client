import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import AOS from "aos";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




    // Google sign-in
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('state captured', currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);
    //Authenticating with google

    //theme change 
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        AOS.refreshHard();

        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark")
        }
        setTimeout(() => {
            AOS.refresh(); // re-apply AOS  triggers
        }, 100)
        localStorage.setItem("theme", theme)
    }, [theme]);
    console.log("Navbar theme:", theme);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        toggleTheme,
        theme,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;