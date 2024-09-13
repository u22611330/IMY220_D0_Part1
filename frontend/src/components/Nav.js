import React from "react";
// Since we're only defining a class but not rendering it, we don't need
// to import ReactDOM here
import { Link } from "react-router-dom";
export class Nav extends React.Component {
render(){
return (
<div>
    <h1>Resonate</h1>
    <Link to='/profile'>Profile</Link>
    <div>
        <Link to ='/home'>Home</Link>
        <Link to='/friends'>Friends</Link>
        <Link to='/search'>Search</Link>
    </div>
    
</div>
);
}
}