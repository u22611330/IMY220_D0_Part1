
import React from "react";
import { AddSongPlaylist } from "./AddSongPlaylist";
import { AddSongCom } from "./AddSongCom";
import { CommentsSong } from "./CommentsSong";
// Since we're only defining a class but not rendering it, we don't need
// to import ReactDOM here
export class Song extends React.Component {
    constructor(props){
        super(props);
        this.displayembed=this.displayembed.bind(this);
        this.toggle=this.toggle.bind(this);
        this.state = {toggled: true, toggledcom:true};
        this.com=this.com.bind(this);
        
        this.handleplay=this.handleplay.bind(this);
        
    }
    com(){
        this.setState({toggledcom: !this.state.toggledcom});
        
    }
 
    handleplay(song){

    }
    toggle(){
        this.setState({toggled: !this.state.toggled});
        }

    displayembed(songURL){
        //let embedCode="Not Spotify Link";
        if (songURL.includes('open.spotify.com')) {
            const trackID = songURL.split("/track/")[1].split("?")[0];

           
            return (
                <iframe 
                    src={`https://open.spotify.com/embed/track/${trackID}`} 
                    width="700" 
                    height="200" 
                    frameBorder="0" 
                    allowtransparency="true" 
                    allow="encrypted-media"
                    >
                </iframe>
            );
        }
        return <p>Not a Spotify Link</p>;

    }
render(){
return (
<div>

    <div>{this.displayembed(this.props.song.link)}<button>Like</button><button onClick={this.com}>Com</button><button onClick={this.toggle}>Add</button></div>
    <p> date Time added:{this.props.song.datead}</p>

    {this.state.toggled ? "":<AddSongPlaylist disappear={this.toggle} />}
    {this.state.toggledcom ? "":<CommentsSong/>}


</div>
);
}
}