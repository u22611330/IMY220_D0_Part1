
import React from "react";

// Since we're only defining a class but not rendering it, we don't need
// to import ReactDOM here
export class Comments extends React.Component {

render(){
return (
<div>

    <p><b>User:{this.props.comm.username}</b><br/> {this.props.comm.link}<br/>
    {this.props.comm.datead}</p>


</div>
);
}
}