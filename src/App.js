import React, { useState, useEffect } from "react";
import countriesData from "./data/countries"; // Import your countries data
import { auth, db } from "./firebaseConfig"; // Firebase auth and Firestore database
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import "./styles/App.css"; // Optional CSS for styling

function App() {
  const [visited, setVisited] = useState([]); // List of visited countries
  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const [user, setUser] = useState(null); // Logged-in user
  const [email, setEmail] = useState(""); // Email for login/signup
  const [password, setPassword] = useState(""); // Password for login/signup
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between login and sign-up
  const [authError, setAuthError] = useState(""); // Error message state

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        fetchVisitedCountries(user.uid);
      } else {
        setUser(null);
        setVisited([]);
      }
    });
    return unsubscribe;
  }, []);

  // Fetch visited countries from Firestore
  const fetchVisitedCountries = async (userId) => {
    try {
      const docRef = doc(collection(db, "users"), userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setVisited(docSnap.data().visited || []);
      }
    } catch (error) {
      console.error("Error fetching visited countries:", error);
    }
  };

  // Save visited countries to Firestore
  const saveVisitedCountries = async (newVisited) => {
    if (!user) return; // Do not save if no user is logged in
    try {
      const docRef = doc(collection(db, "users"), user.uid);
      await setDoc(docRef, { visited: newVisited });
    } catch (error) {
      console.error("Error saving visited countries:", error);
    }
  };

  // Toggle a country's "visited" state
  const toggleVisited = (countryCode) => {
    setVisited((prev) => {
      const isVisited = prev.includes(countryCode);
      const newVisited = isVisited
        ? prev.filter((code) => code !== countryCode) // Remove from visited
        : [...prev, countryCode]; // Add to visited

      saveVisitedCountries(newVisited); // Save to Firestore
      return newVisited;
    });
  };

  // Handle login or sign-up
  const handleAuth = async () => {
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      setEmail("");
      setPassword("");
      setAuthError(""); // Clear error on success
    } catch (error) {
      // Map Firebase error codes to user-friendly messages
      if (error.code === "auth/wrong-password") {
        setAuthError("Incorrect password. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        setAuthError("No user found with this email.");
      } else if (error.code === "auth/email-already-in-use") {
        setAuthError("Email is already in use. Please login instead.");
      } else if (error.code === "auth/invalid-email") {
        setAuthError("Invalid email format.");
      } else {
        setAuthError("An unexpected error occurred. Please try again.");
      }
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="app-container">
      <h1>Countries Visited</h1>
      <p>Total: {visited.length}</p> {/* Display total count at the top */}
      <input
        type="text"
        placeholder="Search countries..."
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="countries-list">
        {countriesData
          .filter((country) =>
            country.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((country) => (
            <div
              key={country.code}
              className={`country-item ${
                visited.includes(country.code) ? "selected" : ""
              }`}
              onClick={() => toggleVisited(country.code)}
            >
              <span className="flag">{country.flag}</span>
              <span className="name">{country.name}</span>
            </div>
          ))}
      </div>
      <div className="results">
        <h2>Your Visited Countries</h2>
        {visited.length === 0 ? (
          <p>No countries selected yet.</p>
        ) : (
          <ul>
            {visited.map((code) => {
              const country = countriesData.find((c) => c.code === code);
              return <li key={code}>{country.name}</li>;
            })}
          </ul>
        )}
      </div>

      <footer className="app-footer">
  {user ? (
    <div>
      <span>Welcome, {user.email}!</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  ) : (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {authError && <p className="error-message">{authError}</p>} {/* Display error messages */}
      <br />
      <button onClick={handleAuth}>
        {isSignUp ? "Sign Up" : "Login"}
      </button>
      <p>
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <span
          className="toggle-link"
          onClick={() => {
            setIsSignUp((prev) => !prev);
            setAuthError(""); // Clear error on toggle
          }}
        >
          {isSignUp ? "Login" : "Sign Up"}
        </span>
      </p>
    </div>
  )}
</footer>
    </div>
  );
}

export default App;