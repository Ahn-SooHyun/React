import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useContext, useState } from "react";

import Calc1 from "./comp/calc/Study_01";

import Inp1 from "./comp/inp/input_01";
import Oup1 from "./comp/inp/output_01";
import Ref1 from "./comp/inp/Ref_01";

import ProJoin from "./comp/pro/Join";
import ProLogin from "./comp/pro/Login";
import ProItemList from "./comp/pro/ItemList";

import Ax1 from "./comp/ax/ax01";

import Assignment_20241204_Login from "./comp/assignment/day20241204/login";
import Assignment_20241204_MyPage from "./comp/assignment/day20241204/MyPage";

import Red01 from "./comp/red/Red01";
import Red02 from "./comp/red/Red02";

import ContextAction from "./comp/context/ContextAction";

import { ContextAPI } from "./context/ContextAPI";

function App() {
  const [parent, setParent] = useState();

  return (
    <div className="App">
      <ContextAPI.Provider value={{ parent, setParent }}>
        {" "}
        <BrowserRouter>
          <About />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/cal1"} element={<Calc1 />} />

            <Route path={"/Inp1"} element={<Inp1 />} />
            <Route path={"/Oup1"} element={<Oup1 />} />
            <Route path={"/Ref1"} element={<Ref1 />} />

            <Route path={"/ProJoin"} element={<ProJoin />} />
            <Route path={"/ProLogin"} element={<ProLogin />} />
            <Route path={"/ProItemList"} element={<ProItemList />} />

            <Route path={"/Ax1"} element={<Ax1 />} />

            <Route
              path={"/Assignment_20241204_Login"}
              element={<Assignment_20241204_Login />}
            />
            <Route
              path={"/Assignment_20241204_MyPage"}
              element={<Assignment_20241204_MyPage />}
            />

            <Route path={"/Red01"} element={<Red01 />} />
            <Route path={"/Red02"} element={<Red02 />} />

            <Route path={"/ContextAction"} element={<ContextAction />} />
          </Routes>
        </BrowserRouter>
      </ContextAPI.Provider>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Start Home</h1>
      <br />
      <br />
      <Link to="/about">About으로 이동</Link>
      <br />
      <Link to="/cal1">Cal1로 이동하기</Link>
      <br />

      <h4>데이터 옮기기</h4>
      <Link to="/Inp1">Inp1로 이동하기</Link>
      <br />
      <h4>데이터 출력</h4>
      <Link to="/Oup1">Oup1로 이동하기</Link>
      <br />
      <Link to="/Ref1">Ref1로 이동하기</Link>
      <br />

      <h4>Join</h4>
      <Link to="/ProJoin">Join로 이동하기</Link>
      <br />
      <Link to="/ProLogin">Login로 이동하기</Link>
      <br />
      <Link to="/ProItemList">ItemList로 이동하기</Link>
      <br />

      <h4> Axios</h4>
      <Link to="/ax1">Axios 사용</Link>
      <br />

      <h4> Assignment_20241204</h4>
      <Link to="/Assignment_20241204_Login">loginPage</Link>
      <br />

      <h4> red</h4>
      <Link to="/Red01">Red01</Link>
      <br />
      <Link to="/Red02">Red02</Link>
      <br />

      <h4> ContextAction</h4>
      <Link to="/ContextAction">ContextAction</Link>
      <br />
    </div>
  );
}

function About() {
  const { parent, setParent } = useContext(ContextAPI);

  return (
    <div style={{ border: "2px blue solid" }}>
      <Link to="/">Home으로 이동</Link>
      <br />
      context 값 : {parent}
    </div>
  );
}

export default App;
