import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Checkout from "./pages/Checkout";
import Homepage from "./pages/Homepage";
import { auth } from "./firebase";
import {setLogin, setLogout} from './redux/userSlice'
import { useDispatch } from "react-redux";


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(setLogin({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(setLogout())
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
