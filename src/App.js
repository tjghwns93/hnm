import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import ProductAll from "./Page/ProductAll";
import ProductDetail from "./Page/ProductDetail";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false); //true로그인, false로그아웃
  useEffect(() => {
    console.log("fhrmdls");
  }, [authenticate]); //의존성배열에 값이 있을 때 그 값이 바뀔 때마다 함수가 다시 실행

  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </>
  );
}

export default App;
