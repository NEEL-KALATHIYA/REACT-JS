// import React, { useState } from "react";
// import { auth } from "../firebase";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// function Auth({ user }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [error, setError] = useState("");

//   const handleAuth = async (e) => {
//     e.preventDefault();
//     setError("");
    
//     try {
//       if (isRegistering) {
//         await createUserWithEmailAndPassword(auth, email, password);
//       } else {
//         await signInWithEmailAndPassword(auth, email, password);
//       }
//       setEmail("");
//       setPassword("");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//     } catch (err) {
//       console.error("Error signing out:", err);
//     }
//   };

//   if (user) {
//     return (
//       <div>
//         <p>Logged in as: {user.email}</p>
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2>{isRegistering ? "Register" : "Login"}</h2>
//       {error && <p className="error">{error}</p>}
//       <form onSubmit={handleAuth}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">{isRegistering ? "Register" : "Login"}</button>
//       </form>
//       <button onClick={() => setIsRegistering(!isRegistering)}>
//         {isRegistering ? "Already have an account? Login" : "Need an account? Register"}
//       </button>
//     </div>
//   );
// }

// export default Auth;