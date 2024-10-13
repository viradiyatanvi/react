import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'; 
import { useNavigate } from 'react-router-dom';

export default function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginMode, setIsLoginMode] = useState(false); 
    const [error, setError] = useState(""); 

    const navigate = useNavigate(); 

    const handleSignup = (e) => {
        e.preventDefault(); 
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("User signed up:", user);
                setIsLoginMode(true); 
            })
            .catch((error) => {
                setError("Error during signup: " + error.message); 
            });
    };

    const handleLogin = (e) => {
        e.preventDefault(); 
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Login successful:", user);
                navigate('/home'); 
            })
            .catch((error) => {
                setError("Error during login: " + error.message); 
            });
    };

    const toggleAuthMode = () => {
        setIsLoginMode((prevMode) => !prevMode);
        setError(""); 
        setEmail(""); 
        setPassword(""); 
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <h1 style={{ textAlign: 'center' }}>{isLoginMode ? "Login" : "Signup"}</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={isLoginMode ? handleLogin : handleSignup}>
                <input
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <br />
                <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <br />
                <button 
                    type="submit" 
                    style={{ 
                        padding: '10px', 
                        backgroundColor: '#007bff', 
                        color: '#fff', 
                        border: 'none', 
                        borderRadius: '4px', 
                        cursor: 'pointer', 
                        width: '100%' 
                    }}
                >
                    {isLoginMode ? "Login" : "Signup"}
                </button>
            </form>
            <p style={{ textAlign: 'center' }}>
                {isLoginMode ? "Don't have an account?" : "Already have an account?"}
                <button onClick={toggleAuthMode} style={{ marginLeft: '5px', color: '#007bff', background: 'none', border: 'none', cursor: 'pointer' }}>
                    {isLoginMode ? "Signup" : "Login"}
                </button>
            </p>
        </div>
    );
}
