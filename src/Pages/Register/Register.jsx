import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { Link } from "react-router";

const Register = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      return setError("Passwords do not match ❌");
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(result.user, {
        displayName: name,
        photoURL: photo,
      });

      form.reset();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-6">
      <div className="flex w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* LEFT IMAGE SECTION */}
        <div className="hidden md:block w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e"
            alt="market"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute bottom-8 left-8 text-white z-10">
            <h2 className="text-3xl font-bold">
              Kacha Bazar
            </h2>
            <p className="mt-2 text-sm opacity-90">
              Fresh from the local market to your table
            </p>
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">

          {user ? (
            <div className="text-center space-y-4">
              <img
                src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                alt="User"
                className="w-24 h-24 rounded-full mx-auto shadow-md"
              />
              <h2 className="text-xl font-bold">
                {user.displayName || "No Name"}
              </h2>
              <p className="text-gray-600">{user.email}</p>

              <button
                onClick={handleLogout}
                className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-green-700">
                Create an account
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-green-600 font-medium hover:underline"
                >
                  Log in
                </Link>
              </p>

              {error && (
                <p className="mt-4 text-sm text-red-500 bg-red-50 p-2 rounded">
                  {error}
                </p>
              )}

              <form onSubmit={handleRegister} className="mt-6 space-y-4">

                <input
                  name="name"
                  type="text"
                  placeholder="Full name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  required
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  required
                />

                <input
                  name="photo"
                  type="text"
                  placeholder="Profile photo URL (optional)"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />

                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  required
                />

                <input
                  name="confirm"
                  type="password"
                  placeholder="Confirm password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300 shadow-md"
                >
                  Create account
                </button>
              </form>

              <div className="my-6 border-t"></div>

              <button
                onClick={handleGoogleLogin}
                className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition"
              >
                Continue with Google
              </button>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default Register;
