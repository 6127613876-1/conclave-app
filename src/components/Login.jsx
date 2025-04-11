// src/components/Login.jsx
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80 text-center">
        <h2 className="text-2xl font-bold mb-6">Login to Conclave</h2>
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-red-500 hover:bg-red-600 text-white p-2 rounded flex items-center justify-center space-x-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 48 48">
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3C33.8 32.4 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C33.1 6.2 28.8 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c10.7 0 19.3-8.2 19.9-18.5.1-1.2.1-2.1.1-3z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7l6.6 4.8C14.3 15.7 18.8 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C33.1 6.2 28.8 4 24 4c-7.2 0-13.4 3.4-17.7 8.7z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.2 0 10.1-2 13.7-5.2l-6.3-5.3C29.7 35.1 27 36 24 36c-5.2 0-9.7-3.6-11.3-8.5l-6.5 5C10.6 40.6 16.9 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.5H42V20H24v8h11.3c-1.3 3.4-4.2 6.2-7.7 7.5l.1.1 6.3 5.3C37.5 37.1 42 31.2 43.6 20.5z"
            />
          </svg>
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}
