// import React from "react";
// import ReactDOM from "react-dom/client";
// class Greeting extends React.Component{
// render(){
// return (
// <div>
// <h2> Hello React! </h2>
// </div>
// );
// }
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Greeting />);
import React from "react";
import ReactDOM from "react-dom/client";
import {PersonList} from "./components/PersonList";
import {SongList} from "./components/SongList";
import {Home} from "./pages/Home";
import {Friends} from "./pages/Friends";
import { Search } from "./pages/Search";
import {App} from "./App";
import { Splash } from "./pages/Splash";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);