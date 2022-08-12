import Logo from "../assets/amazon-logo2.png";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { auth } from "../firebase";
import { setLogin } from "../redux/userSlice";
import { useDispatch } from "react-redux";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [registered, setRegistered] = useState(true);

  const createUser = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((userAuth) => {
        dispatch(
          setLogin({
            uid: userAuth.user._delegate.uid,
            email: userAuth.user._delegate.email,
          })
        );
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((userAuth) => {
        dispatch(
          setLogin({
            uid: userAuth.user._delegate.uid,
            email: userAuth.user._delegate.email,
          })
        );
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const handleClick = () => {
    setRegistered(!registered);
    emailRef.current.value = null;
    passwordRef.current.value = null;
  };

  return (
    <div className="w-80 mx-auto mt-5">
      {registered ? (
        <div className="flex flex-col items-center bg-white pb-5">
          <img
            onClick={() => navigate("/")}
            className="cursor-pointer object-contain w-28 mb-2"
            src={Logo}
            alt="logo"
          />
          <div className="bg-white px-7 py-3 rounded-sm border shadow-sm">
            <h1 className="text-2xl mb-2">Login</h1>
            <form>
              <div className="mb-2">
                <h4 className="text-xs">Email</h4>
                <input
                  ref={emailRef}
                  className="border rounded-sm focus:outline-none pl-1"
                  type="email"
                />
              </div>
              <div className="mb-3">
                <h4 className="text-xs">Password</h4>
                <input
                  ref={passwordRef}
                  className="border rounded-sm focus:outline-none pl-1"
                  type="password"
                />
              </div>
              <button
                onClick={signIn}
                className="button p-1 w-full border-gray-400"
              >
                Login
              </button>
            </form>
            <div className="py-4">
              <h4 className="text-xs text-gray-400 text-center mb-2 border-0 border-b">
                New to Amazon?
              </h4>
              <button
                onClick={handleClick}
                className="button p-1 w-full from-gray-300 to-gray-500 border-gray-400 focus:ring-gray-500 active:from-gray-500 active:to-gray-400"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center bg-white pb-5">
          <img
            onClick={() => navigate("/")}
            className="cursor-pointer object-contain w-28 mb-2"
            src={Logo}
            alt="logo"
          />
          <div className="bg-white px-7 py-3 rounded-sm border shadow-sm">
            <h1 className="text-2xl mb-2">Create Account</h1>
            <form>
              <div className="mb-2">
                <h4 className="text-xs">Name</h4>
                <input
                  className="border rounded-sm focus:outline-none pl-1"
                  type="text"
                />
              </div>
              <div className="mb-2">
                <h4 className="text-xs">Lastname</h4>
                <input
                  className="border rounded-sm focus:outline-none pl-1"
                  type="text"
                />
              </div>
              <div className="mb-2">
                <h4 className="text-xs">Email</h4>
                <input
                  ref={emailRef}
                  className="border rounded-sm focus:outline-none pl-1"
                  type="email"
                />
              </div>
              <div className="mb-3">
                <h4 className="text-xs">Password</h4>
                <input
                  ref={passwordRef}
                  className="border rounded-sm focus:outline-none pl-1"
                  type="password"
                />
              </div>
              <button
                onClick={createUser}
                className="button p-1 w-full border-gray-400"
              >
                Create Account
              </button>
            </form>
            <div className="py-4">
              <h4 className="text-xs text-gray-400 text-center mb-2 border-0 border-b">
                Already have an account?
              </h4>
              <button
                onClick={handleClick}
                className="button p-1 w-full from-gray-300 to-gray-500 border-gray-400 focus:ring-gray-500 active:from-gray-500 active:to-gray-400"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignIn;
