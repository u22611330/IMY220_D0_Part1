import React from "react";
// Since we're only defining a class but not rendering it, we don't need
// to import ReactDOM here
export class EditInfo extends React.Component {
    constructor(props){
        super(props);
        this.handle=this.handle.bind(this);
    }
    handle(e)
    {
        e.preventDefault();
        this.props.disappear();
    }
render(){
return (
<div>
    <form>
    Name:<input type='text' placeholder={this.props.user.name}/><br/>
    Email:<input type='text' placeholder={this.props.user.email}/><br/>
    Socials:<button>Add</button>
    {this.props.user.social.map((element,i)=>(<div key={i}><button >{element.name}</button><button>Delete</button></div>))}
    
    Bio:<input type='text' placeholder={this.props.user.bio}/><br/>
   
    
    
  
    <h2>Fave Genres:</h2>
    
    Genres:<button>Add</button>  {this.props.user.genres.map((element,i)=>(<div  key={i}>{element.name}<button>Delete</button></div>))}
<input type="submit" value="Done"  onClick={this.handle}/>
    </form>
   
    
</div>
);
}
}