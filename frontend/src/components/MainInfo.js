import React from "react";
// Since we're only defining a class but not rendering it, we don't need
// to import ReactDOM here
export class MainInfo extends React.Component {
    constructor(props){
        super(props);
        this.handle=this.handle.bind(this);
    }
    handle()
    {
        this.props.disappear();
    }
render(){
return (
<div>
    <h1>{this.props.user.name}</h1>
    <h2>{this.props.user.email}</h2>
    {this.props.user.social.map((element,i)=><button key={i}>{element.name}</button>)}<br/>
    <p>{this.props.user.bio}</p>
    <h2>Fave Genres:</h2>
    {this.props.user.genres.map((element,i)=><div key={i}>{element.name}</div>)}
  
    <button onClick={this.handle}>Edit</button>
    
</div>
);
}
}