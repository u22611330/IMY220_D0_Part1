
import React from "react";

import { Comments } from "./Comments";
import { AddSongCom } from "./AddSongCom";
export class CommentsSong extends React.Component {
// rest of class definition goes here (see L20 – React 2)
constructor(props){
    super(props);
    this.state={comments:this.props.comments || []};
    this.addCom=this.addCom.bind(this);

    

}

addCom(username,link,datead){
    this.setState({comments:[...this.state.comments,{username,link,datead}]});

}




render(){
    return(
        <div className="container">
            <h2>Comments</h2>
            <ul>
                {this.state.comments.map((song,i)=><Comments key={i} comm={song}/>)}
            </ul>
            <div>
                <AddSongCom onNewCom={this.addCom}/>
            </div>
        </div>
    );
}



}