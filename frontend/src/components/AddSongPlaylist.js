// Contents of AddPersonForm.js inside the new "components" directory
import React from "react";
export class AddSongPlaylist extends React.Component{
// rest of class definition goes here (see L20 – React 2)
    constructor(props){
        super(props);
        this.submit=this.submit.bind(this);
       
        this.playlistInput=React.createRef();
        


    }
    submit(e){
        e.preventDefault();
        let playlist=this.playlistInput.current.value;
        //this.props.add(this.props.song);
        this.props.disappear();
       
       

    }
    render(){
        return(
            <form onSubmit={this.submit}>
                <p>Add Song to playlist</p>
                <input type="text" ref={this.playlistInput}/><br/>
                
                <input type="submit" value="Add"/><br/>
            

            </form>
        );
    }
}