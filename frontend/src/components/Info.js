import React from "react";
import { MainInfo } from "./MainInfo";
import { EditInfo } from "./EditInfo";
// Since we're only defining a class but not rendering it, we don't need
// to import ReactDOM here
export class Info extends React.Component {
    constructor(props){
        super(props);
        this.state={user:this.props.user,toggled:false};
        this.toggle=this.toggle.bind(this);

    }

    toggle(){
        this.setState({toggled: !this.state.toggled});
    }
render(){
return (
<div>
{this.state.toggled?<EditInfo user={this.state.user} disappear={this.toggle}/>:<MainInfo user={this.state.user} disappear={this.toggle}/> } 


</div>
);
}
}