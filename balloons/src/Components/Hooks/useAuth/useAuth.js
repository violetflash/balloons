import { useState, useEffect } from "react";


const UseAuth = authFirebase => {
    const [authentication, setAuthentication] = useState(null);
    const provider = new authFirebase.GoogleAuthProvider();

    const auth = authFirebase();


    const login = () => auth.signInWithPopup(provider);

    const logout = () => auth.signOut()
        .catch(e => console.error(e));

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setAuthentication(user);
            } else {
                setAuthentication(null);
            }
        })

    }, );

    return { authentication,  login, logout };
};

export default UseAuth;