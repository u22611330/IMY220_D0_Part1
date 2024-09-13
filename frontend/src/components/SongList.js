
import React from "react";
import {Song} from "./Song";
import {AddSong} from "./AddSong";
export class SongList extends React.Component {
// rest of class definition goes here (see L20 – React 2)
constructor(props){
    super(props);
    this.state={songs:this.props.songs || []};
    this.addSong=this.addSong.bind(this);

    

}

addSong(link,datead){
    this.setState({songs:[...this.state.songs,{link,datead}]});

}




render(){
    return(
        <div className="container">
             <div>
                <AddSong onNewSong={this.addSong}/>
            </div>
            <ul>
                {this.state.songs.map((song,i)=><Song key={i} song={song}/>)}
            </ul>
           
        </div>
    );
}



}